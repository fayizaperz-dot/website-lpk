# Website LPK Universitas Muhammadiyah Maumere

Website resmi untuk **Lembaga Pelatihan Kerja (LPK) Universitas Muhammadiyah Maumere**, dibangun murni dengan **HTML, CSS, dan JavaScript** (tanpa framework), sehingga mudah dibuka dan dikembangkan langsung di VS Code.

## 📁 Struktur Folder

```
lpk-website/
├── index.html          → Beranda
├── tentang.html         → Profil, Visi & Misi, Struktur Organisasi
├── skema.html            → Daftar Program Pelatihan (dengan pencarian & filter)
├── jadwal.html           → Jadwal gelombang & prosedur pelatihan
├── pendaftaran.html      → Formulir pendaftaran peserta (tersimpan otomatis)
├── peserta.html          → Portal admin: kelola data peserta
├── kontak.html           → Formulir kontak & lokasi
├── css/
│   └── style.css         → Seluruh gaya tampilan (1 file, mudah diubah)
├── js/
│   ├── data.js            → Data program pelatihan, berita, testimoni (edit di sini)
│   ├── storage.js         → Modul penyimpanan data peserta (localStorage)
│   └── main.js             → Navigasi, animasi, dan util umum
├── assets/
│   └── logo-lpk.jpeg      → Logo resmi LPK
└── README.md
```

## 🚀 Cara Menjalankan di VS Code

1. Ekstrak/salin seluruh folder `lpk-website` ke komputer Anda.
2. Buka folder tersebut di VS Code (`File → Open Folder`).
3. Install ekstensi **Live Server** (oleh Ritwick Dey) dari VS Code Marketplace.
4. Klik kanan pada `index.html` → **Open with Live Server**.
5. Website akan terbuka otomatis di browser, lengkap dengan navigasi antar halaman.

> Tanpa Live Server pun, Anda tetap bisa membuka `index.html` langsung dua kali klik di file explorer — semua fitur tetap berjalan karena tidak memerlukan server backend.

## 🗂️ Tentang Penyimpanan Data Peserta

Karena website ini statis (tanpa server/database sungguhan), data pendaftar disimpan menggunakan **`localStorage` browser** melalui modul `js/storage.js`. Artinya:

- Data akan **tetap tersimpan** selama menggunakan browser & perangkat yang sama, walau halaman ditutup/refresh.
- Data **tidak otomatis tersinkron** ke perangkat/browser lain.
- Cocok untuk **demo, presentasi, atau tugas akademik** yang tidak memerlukan server sungguhan.

### Alur data peserta
1. Peserta mengisi formulir di `pendaftaran.html` → data tersimpan otomatis ke `localStorage`.
2. Admin membuka `peserta.html`, login dengan kata sandi default **`admin123`**, lalu dapat:
   - Melihat, mencari, dan memfilter data peserta.
   - Mengubah status (*Menunggu Verifikasi / Diterima / Ditolak*).
   - Menghapus satu atau seluruh data.
   - Mengekspor data ke **CSV** atau **JSON** (bisa dibuka di Excel).
   - Mengisi data contoh untuk keperluan demo.

### Jika ingin dihubungkan ke database sungguhan (mis. MySQL/PostgreSQL)
Modul `PesertaDB` di `js/storage.js` sengaja dipisah agar mudah diganti. Cukup ubah isi fungsi `tambah()`, `ambilSemua()`, `updateStatus()`, dan `hapus()` agar memanggil REST API backend Anda (misalnya dengan `fetch()`), tanpa perlu mengubah halaman HTML sama sekali.

## ✏️ Bagian yang Perlu Anda Sesuaikan

| Yang perlu diubah | Lokasi |
|---|---|
| Nama, alamat, no. telepon, email lembaga | Cari & ganti teks di setiap file `.html` bagian topbar & footer |
| Daftar program pelatihan | `js/data.js` → array `DAFTAR_PROGRAM` |
| Berita & testimoni | `js/data.js` → array `DAFTAR_BERITA` & `DAFTAR_TESTIMONI` |
| Struktur organisasi & nama pejabat | `tentang.html` bagian `#struktur` |
| Kata sandi admin | Ganti langsung di halaman `peserta.html` setelah login (menu "Ganti Kata Sandi Admin") |
| Warna & font | `css/style.css` bagian `:root { ... }` (token warna navy & gold sesuai logo) |

## ✨ Daftar Fitur

- Navigasi responsif dengan dropdown & menu mobile (hamburger).
- Beranda: hero, statistik lembaga, program unggulan, alur pendaftaran, berita, testimoni.
- Halaman profil: visi misi, tujuan, struktur organisasi (bagan visual).
- Halaman program pelatihan dengan **pencarian & filter kategori** real-time.
- Halaman jadwal & prosedur lengkap dengan tabel gelombang pelatihan.
- **Formulir pendaftaran online** dengan validasi (NIK 16 digit, email, no. HP, dsb).
- **Portal admin** dengan gerbang login, ringkasan statistik, tabel data peserta, pencarian, filter status/program, ubah status, hapus data, serta ekspor CSV/JSON.
- Halaman kontak dengan formulir pesan & peta lokasi.
- Desain khas dengan motif "interlock" terinspirasi bentuk huruf pada logo LPK.

---
Dibuat untuk keperluan proyek kelompok mata kuliah (Kelompok 1) — silakan dikembangkan lebih lanjut sesuai kebutuhan.
