# Harmonisasi Investasi - Vercel

Paket statis siap deploy. Empat dashboard utama dan aset bundlenya dimuat dari `index.html`; tidak perlu proses build atau instalasi dependency.

## Deploy di Vercel

1. Upload folder ini ke repositori Git atau pilih `harmonisasi-investasi-vercel` sebagai Project Root.
2. Framework Preset: **Other**.
3. Build Command: kosongkan; Output Directory: `.`.
4. Deploy.

Bisa juga dari folder ini dengan Vercel CLI: `npx vercel --prod`.

Navigasi antar empat halaman berjalan tanpa reload melalui tab, URL hash mendukung tautan langsung, dan tinggi frame mengikuti konten. Layout menggunakan viewport perangkat serta aturan responsif untuk header, tab, kartu, dan ruang konten.
