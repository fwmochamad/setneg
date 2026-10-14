# Harmonisasi Investasi · Dashboard Presiden RI (Vercel)
**Badan Teknologi, Data dan Informasi — Kementerian Sekretariat Negara Republik Indonesia**

Paket aplikasi statis siap deploy untuk Vercel. Telah direfaktorisasi dari bundel monolitik Base64 menjadi arsitektur multi-page statis yang bersih, cepat, ter-cache, dan mudah dikelola.

---

## 📁 Struktur Proyek

```
harmonisasi-investasi-vercel/
├── assets/
│   ├── dc-runtime.js               # Runtime logic & reactive binder
│   ├── inter.css                   # Definisi tipografi resmi Inter
│   ├── react.production.min.js     # React 18.3.1 UMD
│   └── react-dom.production.min.js # ReactDOM 18.3.1 UMD
├── dashboards/
│   ├── payung.html                 # Modul 1: Payung Kebijakan Investasi
│   ├── peluang.html                # Modul 2: Peluang Investasi Daerah
│   ├── demografi.html              # Modul 3: Demografi & Mobilitas Penduduk
│   └── perizinan.html              # Modul 4: Kemudahan Berusaha & OSS RBA
├── index.html                      # Shell eksekutif responsif (~6.7 KB)
├── index.monolith.backup.html      # Backup bundel monolitik awal (~3.09 MB)
├── vercel.json                     # Konfigurasi caching, security headers & routing
└── README.md                       # Dokumentasi proyek
```

---

## 🚀 Keunggulan Arsitektur Baru

1. **Pemuatan Instan (Zero Decompression Overhead)**:
   - Tidak lagi memerlukan dekompresi gzip Base64 `atob()` sebesar 3 MB saat halaman dibuka.
   - Ukuran initial shell `index.html` turun drastis dari **3.090 KB** menjadi **~6,7 KB** (penurunan beban awal sebesar **>99%**).
2. **Edge Caching di Vercel CDN**:
   - Berkas di `/assets/*` diberi header `Cache-Control: public, max-age=31536000, immutable` sehingga di-cache permanen di browser dan edge server Vercel.
   - Dasbor di `/dashboards/*` menggunakan `stale-while-revalidate` untuk pembaruan cepat.
3. **Pembersihan DOM Terintegrasi (Native & Bebas Flicker)**:
   - Modifikasi DOM (penyembunyian label metadata, pemfokusan grafik regulasi tahun 2026, eliminasi kartu isu) terintegrasi secara langsung di masing-masing dasbor tanpa bergantung pada `MutationObserver` lintas iframe yang berat.
4. **Keamanan Eksekutif**:
   - Header keamanan `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, dan `Referrer-Policy: strict-origin-when-cross-origin` terpasang aktif di `vercel.json`.
5. **Navigasi Mulus & Tautan Hash**:
   - Mendukung tautan langsung:
     - `/#payung` : Payung Kebijakan Investasi
     - `/#peluang` : Peluang Investasi Daerah
     - `/#demografi` : Demografi & Mobilitas Penduduk
     - `/#perizinan` : Kemudahan Berusaha & Pelayanan Perizinan
   - Tinggi iframe otomatis menyesuaikan tinggi konten (`postMessage harmonisasi:resize`) tanpa scrollbar ganda.

---

## 🛠️ Menjalankan Secara Lokal

Cukup jalankan server statis apa pun:

```bash
# Menggunakan Node.js
npx serve .

# Menggunakan Python
python -m http.server 3000
```

Buka `http://localhost:3000` di peramban.

---

## 🌐 Deploy di Vercel

1. Hubungkan repositori Git ke Vercel atau pilih folder ini sebagai Project Root.
2. **Framework Preset**: `Other`.
3. **Build Command**: kosongkan (*leave empty*).
4. **Output Directory**: `.`.
5. Klik **Deploy**.

Bisa juga menggunakan Vercel CLI:
```bash
npx vercel --prod
```
