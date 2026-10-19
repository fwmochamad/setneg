// Data contoh (mock) halaman Analisis Keselarasan Regulasi & Tindak Lanjut.
// Ganti isi window.KESELARASAN_DATA dengan respons API dengan struktur yang sama.
// - agregat: angka populasi penuh (290 regulasi, 18 temuan), dipakai kartu dan grafik.
// - temuan: hanya temuan yang datanya tersedia; daftar dan detail memakai array ini.
// Tanggal memakai format ISO (YYYY-MM-DD); lama penanganan dihitung di halaman.
window.KESELARASAN_DATA = {
  acuan: '2026-10-01',
  meta: { diperbarui: '1 Okt 2026, 06.00 WIB', periode: 'Regulasi berlaku s.d. 1 Okt 2026' },

  agregat: {
    berlaku: 290, dinilai: 284, selaras: 271, tidakSelaras: 13, belumDinilai: 6,
    temuan: 18, rataLama: 34,
    status: { belum: 3, proses: 6, tunggu: 2, selesai: 2 },
    jenis: { hambatan: 7, kewenangan: 5, norma: 4, sasaran: 2 },
    sektor: [['C', 4], ['B', 3], ['A', 3], ['I', 3], ['D', 2], ['G', 2], ['F', 1]]
  },

  jenis: [
    ['hambatan', 'Hambatan kemudahan berusaha'],
    ['kewenangan', 'Tumpang tindih kewenangan'],
    ['norma', 'Pertentangan norma'],
    ['sasaran', 'Tidak sesuai sasaran pembangunan']
  ],

  status: [
    ['belum', 'Belum ditindaklanjuti'],
    ['proses', 'Dalam penanganan'],
    ['tunggu', 'Menunggu keputusan'],
    ['selesai', 'Selesai']
  ],

  // KBLI 2025 (Peraturan BPS No. 7 Tahun 2025): [kode, nama, golongan pokok]
  sektor: [
    ['A', 'Pertanian, Kehutanan dan Perikanan', '01–03'],
    ['B', 'Pertambangan dan Penggalian', '05–09'],
    ['C', 'Industri Pengolahan', '10–33'],
    ['D', 'Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin', '35'],
    ['E', 'Pengelolaan Air, Air Limbah, Sampah dan Remediasi', '36–39'],
    ['F', 'Konstruksi', '41–43'],
    ['G', 'Perdagangan Besar dan Eceran', '46–47'],
    ['H', 'Transportasi dan Pergudangan', '49–53'],
    ['I', 'Penyediaan Akomodasi dan Makan Minum', '55–56'],
    ['J', 'Penerbitan, Penyiaran, serta Produksi dan Distribusi Konten', '58–60'],
    ['K', 'Telekomunikasi, Pemrograman Komputer dan Infrastruktur Komputasi', '61–63'],
    ['L', 'Aktivitas Keuangan dan Asuransi', '64–66'],
    ['M', 'Real Estat', '68'],
    ['N', 'Aktivitas Profesional, Ilmiah dan Teknis', '69–75'],
    ['O', 'Penyewaan, Ketenagakerjaan, Agen Perjalanan dan Penunjang Usaha', '77–82'],
    ['P', 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib', '84'],
    ['Q', 'Pendidikan', '85'],
    ['R', 'Aktivitas Kesehatan Manusia dan Aktivitas Sosial', '86–88'],
    ['S', 'Kesenian, Hiburan dan Rekreasi', '90–93'],
    ['T', 'Aktivitas Jasa Lainnya', '94–96'],
    ['U', 'Aktivitas Rumah Tangga sebagai Pemberi Kerja', '97–98'],
    ['V', 'Aktivitas Badan Internasional dan Ekstra Internasional', '99'],
    ['LS', 'Lintas sektor', '']
  ],

  temuan: [
    {
      id: 'T-001',
      reg: 'Perda Kab. Pulang Pisau No. 1/2026',
      regFull: 'Peraturan Daerah Kabupaten Pulang Pisau Nomor 1 Tahun 2026 tentang Penyertaan Modal Daerah',
      judul: 'Penyertaan modal BUMD belum dikaitkan dengan sasaran pembangunan',
      jenis: 'sasaran',
      ketentuan: ['Penyertaan modal BUMD', 'sasaran RPJMN 2025–2029'],
      pj: 'Pemkab Pulang Pisau',
      status: 'selesai', mulai: '2026-08-04', selesai: '2026-09-01',
      wilayah: 'Kalimantan Tengah', sektor: ['L'], verif: true,
      dinilai: 'Penyertaan modal daerah kepada BUMD ditetapkan tanpa tujuan, indikator kinerja, dan jangka waktu pengembalian yang terukur.',
      pembanding: { reg: 'Perpres 12/2025 (RPJMN 2025–2029)', teks: 'Belanja dan investasi daerah diarahkan untuk mendukung sasaran pembangunan nasional dan daerah dengan indikator yang terukur.' },
      pertimbangan: 'Tanpa indikator kinerja, penyertaan modal tidak dapat dinilai kontribusinya terhadap sasaran RPJMN dan RPJMD. Pemkab telah menetapkan indikator melalui peraturan bupati pelaksana.',
      jejak: 'Ditandai AI 30 Jul 2026 · naskah: JDIH Kabupaten Pulang Pisau',
      blocker: [
        { kat: 'Internal', uraian: 'Tujuan penyertaan modal tidak disertai indikator kinerja BUMD.', dampak: 'Manfaat investasi daerah tidak terukur.', unit: 'Bagian Perekonomian Setda Kab. Pulang Pisau', status: 'selesai' },
        { kat: 'Antarperaturan', uraian: 'Belum merujuk sasaran RPJMN 2025–2029 dan RPJMD.', dampak: 'Penyertaan modal berisiko tidak selaras dengan prioritas pembangunan.', unit: 'Bappelitbangda Kab. Pulang Pisau', status: 'selesai' }
      ],
      dampak: 'Setelah indikator kinerja ditetapkan, penyertaan modal diarahkan ke BUMD agribisnis yang mendukung ketahanan pangan, sehingga kepastian bagi mitra investasi daerah meningkat.',
      rekomendasi: { teks: 'Tetapkan indikator kinerja dan keterkaitan penyertaan modal dengan sasaran RPJMN 2025–2029 melalui peraturan bupati pelaksana.', pj: 'Pemerintah Kabupaten Pulang Pisau', pembina: 'Kemendagri (Ditjen Bina Keuangan Daerah)', status: 'Selesai' },
      unit: [
        { nama: 'Bagian Perekonomian Setda', instansi: 'Pemkab Pulang Pisau', peran: 'Menyusun perbup pelaksana', chip: 'Penanggung jawab utama' },
        { nama: 'Bappelitbangda', instansi: 'Pemkab Pulang Pisau', peran: 'Menyelaraskan dengan RPJMD', chip: 'Pelaksana' },
        { nama: 'Ditjen Bina Keuangan Daerah', instansi: 'Kemendagri', peran: 'Pembinaan keuangan daerah', chip: 'Pembina' }
      ],
      riwayat: [
        { tgl: '30 Jul 2026', l: 'Indikasi awal ditandai AI', st: 'done' },
        { tgl: '4 Agu 2026', l: 'Diteruskan ke Pemkab Pulang Pisau', st: 'done' },
        { tgl: '20 Agu 2026', l: 'Penyusunan perbup pelaksana', st: 'done' },
        { tgl: '1 Sep 2026', l: 'Perbup ditetapkan · selesai', st: 'done' }
      ]
    },
    {
      id: 'T-002',
      reg: 'Permen KP No. 1/2026',
      regFull: 'Peraturan Menteri Kelautan dan Perikanan Nomor 1 Tahun 2026 tentang Desa Wisata Bahari',
      judul: 'Pembinaan desa wisata bahari beririsan dengan kewenangan pariwisata',
      jenis: 'kewenangan',
      ketentuan: ['Pembinaan desa wisata bahari', 'kewenangan Kementerian Pariwisata'],
      pj: 'KKP · Kemenpar',
      status: 'tunggu', mulai: '2026-08-21', selesai: null,
      wilayah: 'Nasional', sektor: ['A', 'I'], verif: true,
      dinilai: 'Kementerian Kelautan dan Perikanan menetapkan kriteria, pembinaan, dan sertifikasi desa wisata bahari.',
      pembanding: { reg: 'UU 10/2009 jo. UU 6/2023 (Kepariwisataan)', teks: 'Penetapan standar dan pembinaan destinasi serta usaha pariwisata menjadi kewenangan menteri yang menyelenggarakan urusan pariwisata.' },
      pertimbangan: 'Sertifikasi desa wisata bahari oleh KKP berpotensi menduplikasi standar desa wisata Kemenpar, sehingga pengelola desa menghadapi dua rezim pembinaan. Pembagian peran memerlukan keputusan rapat koordinasi tingkat menteri.',
      jejak: 'Ditandai AI 14 Agu 2026 · naskah: JDIH Kementerian Kelautan dan Perikanan',
      blocker: [
        { kat: 'Antarperaturan', uraian: 'Kriteria desa wisata bahari berbeda dengan standar desa wisata Kemenpar.', dampak: 'Pengelola desa dan investor wisata menghadapi dua acuan.', unit: 'Ditjen Pengelolaan Kelautan KKP', status: 'tunggu' },
        { kat: 'Eksternal', uraian: 'Belum ada forum penetapan pembagian peran KKP–Kemenpar.', dampak: 'Keputusan tertunda menunggu rapat koordinasi.', unit: 'Kemenko Pangan · Kemenko Perekonomian', status: 'tunggu' }
      ],
      dampak: 'Ketidakpastian rezim pembinaan dapat menunda rencana investasi akomodasi skala kecil di desa pesisir, terutama yang membutuhkan sertifikasi sebagai syarat pembiayaan.',
      rekomendasi: { teks: 'Tetapkan pembagian peran: KKP membina aspek ruang laut dan perikanan, Kemenpar membina standar destinasi; satukan sertifikasi melalui satu pintu.', pj: 'Kementerian Kelautan dan Perikanan · Kementerian Pariwisata', pembina: 'Kemenko Perekonomian', status: 'Menunggu keputusan rapat koordinasi' },
      unit: [
        { nama: 'Ditjen Pengelolaan Kelautan', instansi: 'KKP', peran: 'Penyusun Permen KP 1/2026', chip: 'Penanggung jawab utama' },
        { nama: 'Deputi Bidang Destinasi', instansi: 'Kementerian Pariwisata', peran: 'Standar desa wisata', chip: 'Pelaksana' },
        { nama: 'Deputi Bidang Koordinasi Ekonomi Digital dan Ketenagakerjaan', instansi: 'Kemenko Perekonomian', peran: 'Fasilitasi keputusan lintas kementerian', chip: 'Pembina' },
        { nama: 'Ditjen Peraturan Perundang-undangan', instansi: 'Kementerian Hukum', peran: 'Harmonisasi peraturan menteri', chip: 'Terkait' }
      ],
      riwayat: [
        { tgl: '14 Agu 2026', l: 'Indikasi awal ditandai AI', st: 'done' },
        { tgl: '21 Agu 2026', l: 'Diteruskan ke KKP dan Kemenpar', st: 'done' },
        { tgl: '10 Sep 2026–sekarang', l: 'Menunggu keputusan rapat koordinasi', st: 'now' },
        { tgl: 'Berikutnya', l: 'Revisi Permen KP / SKB', st: 'next' }
      ]
    },
    {
      id: 'T-004',
      reg: 'Permendag No. 1/2026',
      regFull: 'Peraturan Menteri Perdagangan Nomor 1 Tahun 2026 tentang Ketentuan Ekspor Karet Alam',
      judul: 'Spesifikasi teknis ekspor karet berbeda dengan SNI',
      jenis: 'norma',
      ketentuan: ['Spesifikasi teknis ekspor', 'SNI karet alam'],
      pj: 'Kemendag · Kemenperin',
      status: 'proses', mulai: '2026-08-26', selesai: null,
      wilayah: 'Nasional', sektor: ['G', 'C', 'A'], verif: true,
      dinilai: 'Lampiran menetapkan parameter mutu karet alam untuk ekspor (kadar kotoran dan plastisitas) dengan ambang yang berbeda dari SNI yang berlaku.',
      pembanding: { reg: 'SNI 1903:2017 (Standard Indonesian Rubber)', teks: 'Parameter mutu SIR ditetapkan per kelas; SNI yang diberlakukan wajib menjadi acuan penilaian kesesuaian produk.' },
      pertimbangan: 'Perbedaan ambang mutu membuat produk yang lolos SNI dapat tertahan saat verifikasi ekspor, dan sebaliknya. Kemendag dan Kemenperin sedang menyelaraskan lampiran teknis.',
      jejak: 'Ditandai AI 20 Agu 2026 · naskah: JDIH Kementerian Perdagangan',
      blocker: [
        { kat: 'Antarperaturan', uraian: 'Ambang kadar kotoran pada lampiran berbeda dengan SNI 1903:2017.', dampak: 'Eksportir menghadapi dua standar mutu.', unit: 'Ditjen Perdagangan Luar Negeri Kemendag', status: 'proses' },
        { kat: 'Eksternal', uraian: 'Lembaga verifikasi ekspor belum menerima petunjuk teknis baru.', dampak: 'Potensi penahanan pengapalan.', unit: 'Kemendag · surveyor', status: 'proses' },
        { kat: 'Internal', uraian: 'Masa transisi tidak diatur dalam permen.', dampak: 'Kontrak ekspor berjalan berisiko tidak memenuhi syarat.', unit: 'Biro Hukum Kemendag', status: 'belum' }
      ],
      dampak: 'Perkiraan kualitatif: hambatan verifikasi dapat menunda ekspor karet remah dan menahan rencana ekspansi pabrik pengolahan di sentra karet Sumatra dan Kalimantan.',
      rekomendasi: { teks: 'Samakan parameter mutu pada lampiran dengan SNI 1903:2017 dan atur masa transisi bagi kontrak berjalan.', pj: 'Kementerian Perdagangan', pembina: 'Kementerian Perindustrian · BSN', status: 'Dalam penanganan' },
      unit: [
        { nama: 'Ditjen Perdagangan Luar Negeri', instansi: 'Kemendag', peran: 'Revisi lampiran teknis', chip: 'Penanggung jawab utama' },
        { nama: 'Ditjen Industri Agro', instansi: 'Kemenperin', peran: 'Penyelarasan SNI wajib', chip: 'Pelaksana' },
        { nama: 'Badan Standardisasi Nasional', instansi: 'BSN', peran: 'Pembina standar', chip: 'Pembina' },
        { nama: 'Ditjen Perkebunan', instansi: 'Kementan', peran: 'Mutu bahan olah karet', chip: 'Terkait' }
      ],
      riwayat: [
        { tgl: '20 Agu 2026', l: 'Indikasi awal ditandai AI', st: 'done' },
        { tgl: '26 Agu 2026', l: 'Diteruskan ke Kemendag dan Kemenperin', st: 'done' },
        { tgl: '15 Sep 2026–sekarang', l: 'Penyelarasan lampiran teknis', st: 'now' },
        { tgl: 'Berikutnya', l: 'Penetapan perubahan Permendag', st: 'next' }
      ]
    },
    {
      id: 'T-006',
      reg: 'Permen Kebudayaan No. 1/2026',
      regFull: 'Peraturan Menteri Kebudayaan Nomor 1 Tahun 2026 tentang Standar Kegiatan Usaha pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko Subsektor Kebudayaan',
      judul: 'Standar usaha tambahan di luar PP 28/2025',
      jenis: 'hambatan',
      ketentuan: ['Standar usaha tambahan', 'PP 28/2025'],
      pj: 'Kementerian Kebudayaan',
      status: 'proses', mulai: '2026-08-29', selesai: null,
      wilayah: 'Nasional', sektor: ['S'], verif: true,
      dinilai: 'Pelaku usaha subsektor kebudayaan wajib memenuhi standar tambahan berupa rekomendasi kesesuaian dari dinas kebudayaan sebelum sertifikat standar terbit.',
      pembanding: { reg: 'PP 28/2025', teks: 'Standar usaha ditetapkan dalam lampiran PP; kementerian tidak menambah persyaratan di luar yang diatur.' },
      pertimbangan: 'Rekomendasi dinas tidak tercantum dalam lampiran PP 28/2025 sehingga berfungsi sebagai persyaratan tambahan dan memperpanjang proses sertifikat standar.',
      jejak: 'Ditandai AI 22 Agu 2026 · naskah: JDIH Kementerian Kebudayaan',
      blocker: [
        { kat: 'Antarperaturan', uraian: 'Rekomendasi dinas kebudayaan tidak ada dalam lampiran PP 28/2025.', dampak: 'Sertifikat standar tertahan di daerah.', unit: 'Ditjen Pelindungan Kebudayaan', status: 'proses' },
        { kat: 'Eksternal', uraian: 'Belum ada format rekomendasi baku di OSS.', dampak: 'Proses berlangsung manual di luar sistem.', unit: 'Kementerian Investasi/BKPM (pengelola OSS)', status: 'belum' }
      ],
      dampak: 'Perkiraan kualitatif: usaha galeri, pertunjukan, dan museum swasta berpotensi tertunda beroperasi karena menunggu rekomendasi dinas.',
      rekomendasi: { teks: 'Cabut syarat rekomendasi dinas atau masukkan ke lampiran PP melalui mekanisme perubahan standar; sementara itu, tetapkan bahwa permohonan tidak ditahan.', pj: 'Kementerian Kebudayaan', pembina: 'Kementerian Investasi dan Hilirisasi/BKPM', status: 'Dalam penanganan' },
      unit: [
        { nama: 'Ditjen Pelindungan Kebudayaan dan Tradisi', instansi: 'Kementerian Kebudayaan', peran: 'Revisi permen', chip: 'Penanggung jawab utama' },
        { nama: 'Biro Hukum', instansi: 'Kementerian Kebudayaan', peran: 'Penyusunan perubahan', chip: 'Pelaksana' },
        { nama: 'Deputi Bidang Pelayanan Penanaman Modal', instansi: 'Kementerian Investasi dan Hilirisasi/BKPM', peran: 'Penyesuaian OSS', chip: 'Pembina' }
      ],
      riwayat: [
        { tgl: '22 Agu 2026', l: 'Indikasi awal ditandai AI', st: 'done' },
        { tgl: '29 Agu 2026', l: 'Diteruskan ke Kementerian Kebudayaan', st: 'done' },
        { tgl: '18 Sep 2026–sekarang', l: 'Penyusunan perubahan permen', st: 'now' },
        { tgl: 'Berikutnya', l: 'Harmonisasi di Kementerian Hukum', st: 'next' }
      ]
    },
    {
      id: 'T-007',
      reg: 'Perda Kab. Kudus No. 1/2026',
      regFull: 'Peraturan Daerah Kabupaten Kudus Nomor 1 Tahun 2026 tentang Penyelenggaraan Penanaman Modal',
      judul: 'Rekomendasi daerah sebagai persyaratan tambahan sebelum OSS',
      jenis: 'hambatan',
      ketentuan: ['Persyaratan rekomendasi daerah', 'PP 28/2025 (tanpa persyaratan tambahan)'],
      pj: 'Pemkab Kudus',
      status: 'belum', mulai: '2026-09-19', selesai: null,
      wilayah: 'Jawa Tengah', sektor: ['LS'], verif: false,
      dinilai: 'Ketentuan perizinan penanaman modal mensyaratkan rekomendasi perangkat daerah sebelum permohonan perizinan berusaha diproses.',
      pembanding: { reg: 'PP 28/2025', teks: 'Menjadi satu-satunya acuan perizinan berusaha berbasis risiko; K/L dan pemda tidak menambah persyaratan di luar yang diatur.' },
      pertimbangan: 'Rekomendasi daerah berfungsi sebagai persyaratan tambahan dan berpotensi menahan permohonan sebelum masuk OSS. Penilaian menunggu konfirmasi naskah pasal dari JDIH Kabupaten Kudus.',
      jejak: 'Ditandai AI 19 Sep 2026 · naskah: JDIH Kabupaten Kudus',
      blocker: [
        { kat: 'Antarperaturan', uraian: 'Rekomendasi daerah disyaratkan sebelum permohonan masuk OSS.', dampak: 'Permohonan tertahan di luar sistem dan SLA tidak berjalan.', unit: 'DPMPTSP Kab. Kudus', status: 'belum' },
        { kat: 'Internal', uraian: 'Pasal insentif mendelegasikan pengaturan ke Perbup yang belum terbit.', dampak: 'Insentif penanaman modal belum dapat diberikan.', unit: 'Bagian Hukum Setda Kab. Kudus', status: 'belum' }
      ],
      dampak: 'Perkiraan kualitatif: persyaratan tambahan dapat memperlambat masuknya permohonan industri pengolahan tembakau dan makanan di Kudus ke OSS, sehingga realisasi investasi tertunda.',
      rekomendasi: { teks: 'Sesuaikan persyaratan perizinan dalam Perda agar mengikuti PP 28/2025 tanpa rekomendasi tambahan; terbitkan Perbup insentif.', pj: 'Pemerintah Kabupaten Kudus', pembina: 'Kemendagri', status: 'Draf AI – menunggu verifikasi' },
      unit: [
        { nama: 'DPMPTSP', instansi: 'Pemkab Kudus', peran: 'Pelaksana perizinan daerah', chip: 'Penanggung jawab utama' },
        { nama: 'Bagian Hukum Setda', instansi: 'Pemkab Kudus', peran: 'Perubahan Perda dan Perbup', chip: 'Pelaksana' },
        { nama: 'Ditjen Bina Pembangunan Daerah', instansi: 'Kemendagri', peran: 'Pembinaan Perda', chip: 'Pembina' },
        { nama: 'Deputi Bidang Pelayanan Penanaman Modal', instansi: 'Kementerian Investasi dan Hilirisasi/BKPM', peran: 'Pemantauan OSS', chip: 'Terkait' }
      ],
      riwayat: [
        { tgl: '19 Sep 2026', l: 'Indikasi awal ditandai AI', st: 'done' },
        { tgl: '22 Sep 2026–sekarang', l: 'Diteruskan ke Pemkab Kudus', st: 'now' },
        { tgl: 'Berikutnya', l: 'Penyesuaian Perda', st: 'next' }
      ]
    }
  ]
};
