/* ==========================================================================
   data.js — Data statis (program pelatihan, berita, testimoni)
   Silakan ubah isi array di bawah ini sesuai kebutuhan LPK Anda.
   ========================================================================== */

const DAFTAR_PROGRAM = [
  { kode:"LPK-TI-01", nama:"Junior Web Programmer", kategori:"Teknologi Informasi", level:"Junior", durasi:"120 Jam Pelatihan", kuota:30, terisi:22 },
  { kode:"LPK-TI-02", nama:"Desain Grafis & Multimedia", kategori:"Teknologi Informasi", level:"Junior", durasi:"90 Jam Pelatihan", kuota:25, terisi:18 },
  { kode:"LPK-BIS-01", nama:"Digital Marketing", kategori:"Bisnis & Manajemen", level:"Junior", durasi:"80 Jam Pelatihan", kuota:30, terisi:27 },
  { kode:"LPK-BIS-02", nama:"Administrasi Perkantoran", kategori:"Bisnis & Manajemen", level:"Junior", durasi:"100 Jam Pelatihan", kuota:25, terisi:14 },
  { kode:"LPK-PAR-01", nama:"Tata Boga & Pastry", kategori:"Pariwisata & Kuliner", level:"Junior", durasi:"110 Jam Pelatihan", kuota:20, terisi:20 },
  { kode:"LPK-PAR-02", nama:"Perhotelan & Housekeeping", kategori:"Pariwisata & Kuliner", level:"Junior", durasi:"90 Jam Pelatihan", kuota:20, terisi:9 },
  { kode:"LPK-TEK-01", nama:"Teknisi Jaringan Komputer", kategori:"Teknologi Informasi", level:"Madya", durasi:"130 Jam Pelatihan", kuota:24, terisi:16 },
  { kode:"LPK-BHS-01", nama:"Bahasa Inggris untuk Kerja (TOEFL/IELTS Prep)", kategori:"Bahasa & Komunikasi", level:"Junior", durasi:"70 Jam Pelatihan", kuota:30, terisi:11 },
];

const DAFTAR_BERITA = [
  { tanggal:"12 Juli 2026", judul:"LPK UM Maumere Buka Gelombang Pelatihan Tahap II 2026", ringkas:"Pendaftaran gelombang kedua resmi dibuka untuk delapan program pelatihan unggulan dengan kuota terbatas." },
  { tanggal:"28 Juni 2026", judul:"Kerja Sama Penempatan Kerja dengan Mitra Industri Lokal", ringkas:"LPK menjalin kerja sama baru untuk penyaluran alumni ke sejumlah perusahaan mitra di Nusa Tenggara Timur." },
  { tanggal:"05 Juni 2026", judul:"Wisuda & Penyerahan Sertifikat Kompetensi Angkatan I", ringkas:"Sebanyak 120 peserta pelatihan dinyatakan lulus dan menerima sertifikat kompetensi pada seremoni angkatan pertama." },
];

const DAFTAR_TESTIMONI = [
  { nama:"Maria Goreti", peran:"Alumni Digital Marketing", kutipan:"Materinya aplikatif dan instrukturnya sabar membimbing sampai saya benar-benar paham praktiknya." },
  { nama:"Yohanes Bala", peran:"Alumni Junior Web Programmer", kutipan:"Setelah lulus pelatihan, saya langsung dibantu proses magang ke mitra industri LPK." },
  { nama:"Angela Wangge", peran:"Alumni Tata Boga & Pastry", kutipan:"Fasilitas dapur latihan lengkap dan sertifikatnya diakui saat saya melamar kerja." },
];
