"""Bangun assets/peluang-geo.js (python scripts/build_peluang_geo.py <kabkota.json> <prov.geojson> assets/peluang-geo.js): batas kab/kota 5 provinsi PDRB terbesar + provinsi tetangga.

Proyeksi ekuirektangular: x = (lon - 95) * K, y = (6 - lat) * K, dibulatkan ke integer.
"""
import json
import sys

KAB_SRC, PROV_SRC, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
K = 400  # unit per derajat (~280 m per unit)

PROV = {
    'dki': ('Jakarta Raya', 'DKI JAKARTA', ['jabar', 'banten'], ('Jakarta', 106.827, -6.175), 0.0012),
    'jabar': ('Jawa Barat', 'JAWA BARAT', ['dki', 'banten', 'jateng'], ('Bandung', 107.609, -6.914), 0.006),
    'jateng': ('Jawa Tengah', 'JAWA TENGAH', ['jabar', 'diy', 'jatim'], ('Semarang', 110.42, -6.99), 0.006),
    'jatim': ('Jawa Timur', 'JAWA TIMUR', ['jateng', 'bali'], ('Surabaya', 112.75, -7.257), 0.007),
    'sumut': ('Sumatera Utara', 'SUMATERA UTARA', ['aceh', 'riau', 'sumbar'], ('Medan', 98.672, 3.595), 0.009),
}
NB = {'dki': 'DKI JAKARTA', 'jabar': 'JAWA BARAT', 'banten': 'BANTEN', 'jateng': 'JAWA TENGAH',
      'diy': 'DAERAH ISTIMEWA YOGYAKARTA', 'jatim': 'JAWA TIMUR', 'bali': 'BALI', 'sumut': 'SUMATERA UTARA',
      'aceh': 'DI. ACEH', 'riau': 'RIAU', 'sumbar': 'SUMATERA BARAT'}


def dp(pts, tol):
    if len(pts) < 3:
        return pts
    (x0, y0), (x1, y1) = pts[0], pts[-1]
    dx, dy = x1 - x0, y1 - y0
    n2 = dx * dx + dy * dy
    best, bi = -1, 0
    for i in range(1, len(pts) - 1):
        px, py = pts[i]
        if n2 == 0:
            d = (px - x0) ** 2 + (py - y0) ** 2
        else:
            t = max(0, min(1, ((px - x0) * dx + (py - y0) * dy) / n2))
            d = (px - x0 - t * dx) ** 2 + (py - y0 - t * dy) ** 2
        if d > best:
            best, bi = d, i
    if best <= tol * tol:
        return [pts[0], pts[-1]]
    return dp(pts[:bi + 1], tol)[:-1] + dp(pts[bi:], tol)


def area(r):
    return abs(sum(r[i][0] * r[i - 1][1] - r[i - 1][0] * r[i][1] for i in range(len(r)))) / 2


def proj(lon, lat):
    return (round((lon - 95) * K), round((6 - lat) * K))


def polys_of(geo):
    return geo['coordinates'] if geo['type'] == 'MultiPolygon' else [geo['coordinates']]


def to_path(geo, tol, min_area):
    parts, rings = [], []
    for poly in polys_of(geo):
        for ri, ring in enumerate(poly):
            if ri > 0:
                continue  # abaikan lubang (enclave kecil)
            if area(ring) < min_area:
                continue
            s = dp([tuple(p[:2]) for p in ring], tol)
            pts = []
            for lon, lat in s:
                q = proj(lon, lat)
                if not pts or pts[-1] != q:
                    pts.append(q)
            if len(pts) < 3:
                continue
            rings.append(ring)
            parts.append('M' + 'L'.join(f'{x} {y}' for x, y in pts) + 'Z')
    return ' '.join(parts), rings


def centroid(rings):
    big = max(rings, key=area)
    a = cx = cy = 0
    for i in range(len(big)):
        x0, y0 = big[i - 1][:2]
        x1, y1 = big[i][:2]
        c = x0 * y1 - x1 * y0
        a += c
        cx += (x0 + x1) * c
        cy += (y0 + y1) * c
    if a == 0:
        return proj(*big[0][:2])
    return proj(cx / (3 * a), cy / (3 * a))


def kab_name(p):
    n, t = p['NAME_2'], p['TYPE_2']
    if n.startswith('Admin. '):
        return 'Kab. Adm. ' + n[7:]
    if t == 'Kabupaten':
        return 'Kab. ' + n
    if n.startswith('Kota ') or n.startswith('Jakarta'):
        return n
    return 'Kota ' + n


kab = json.load(open(KAB_SRC, encoding='utf-8'))
prov = json.load(open(PROV_SRC, encoding='utf-8'))
prov_by = {f['properties']['Propinsi']: f['geometry'] for f in prov['features']}

out = {'k': K, 'ox': 95, 'oy': 6, 'prov': {}}
for pid, (gadm, pname, nbs, cap, tol) in PROV.items():
    items = []
    xs, ys = [], []
    big = 0
    for f in kab['features']:
        if f['properties']['NAME_1'] == gadm and f['geometry']:
            for poly in polys_of(f['geometry']):
                big = max(big, area(poly[0]))
    for f in kab['features']:
        p = f['properties']
        if p['NAME_1'] != gadm or not f['geometry']:
            continue
        d, rings = to_path(f['geometry'], tol, (tol * tol) * 4)
        if not d:
            continue
        cx, cy = centroid(rings)
        name = kab_name(p)
        items.append([name, d, cx, cy])
        if 'Seribu' not in name:  # Kep. Seribu terlalu jauh ke utara; bingkai fokus ke daratan
            for ring in rings:
                if area(ring) < big * 0.04:  # pulau kecil yang jauh tidak ikut menentukan bingkai
                    continue
                for lon, lat in ring:
                    x, y = proj(lon, lat)
                    xs.append(x)
                    ys.append(y)
    items.sort(key=lambda r: r[0])
    nb = []
    for n in nbs:
        d, _ = to_path(prov_by[NB[n]], tol * 1.6, (tol * tol) * 16)
        nb.append(d)
    cx, cy = proj(cap[1], cap[2])
    out['prov'][pid] = {'bb': [min(xs), min(ys), max(xs), max(ys)], 'kab': items, 'nb': nb, 'cap': [cap[0], cx, cy]}
    print(pid, len(items), sum(len(i[1]) for i in items), 'chars kab;', sum(len(x) for x in nb), 'chars nb')

js = ('// GENERATED by scripts/build_peluang_geo.py: batas kab/kota GADM 2.8 (via rifani/geojson-political-indonesia)\n'
      '// dan batas provinsi BAKOSURTANAL 1:250.000 (via ans-4175/peta-indonesia-geojson), disederhanakan Douglas-Peucker.\n'
      '// Proyeksi: x = (lon - 95) * k, y = (6 - lat) * k.\n'
      'window.PELUANG_GEO = ' + json.dumps(out, separators=(',', ':'), ensure_ascii=False) + ';\n')
open(OUT, 'w', encoding='utf-8', newline='\n').write(js)
print('bytes', len(js.encode()))
