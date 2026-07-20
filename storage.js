/* ==========================================================================
   storage.js — Lapisan penyimpanan data peserta LPK
   ==========================================================================
   Website ini murni HTML/CSS/JS statis (tanpa server), sehingga data
   pendaftar disimpan di localStorage browser (sisi klien) sebagai
   "database" sederhana. Data akan tetap ada selama browser & perangkat
   yang sama digunakan, namun TIDAK tersinkron ke perangkat lain.

   Untuk kebutuhan produksi (multi-user, aman, tersentralisasi), modul
   simpanLocal()/ambilSemua() di bawah ini tinggal diganti dengan
   pemanggilan fetch() ke REST API / database sungguhan (mis. Node.js +
   MySQL/PostgreSQL). Struktur data (objek "peserta") dibuat agar mudah
   dipetakan langsung ke tabel database relasional.
   ========================================================================== */

const LPK_DB_KEY = "lpk_um_maumere_peserta";
const LPK_ADMIN_KEY = "lpk_um_maumere_admin_pass";
const LPK_SESSION_KEY = "lpk_um_maumere_admin_session";
const DEFAULT_ADMIN_PASSWORD = "admin123";

const PesertaDB = {
  /** Ambil seluruh data peserta */
  ambilSemua(){
    try{
      const raw = localStorage.getItem(LPK_DB_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){
      console.error("Gagal membaca data peserta:", e);
      return [];
    }
  },

  /** Simpan (overwrite) seluruh array peserta */
  simpanSemua(list){
    localStorage.setItem(LPK_DB_KEY, JSON.stringify(list));
  },

  /** Tambah satu pendaftar baru, mengembalikan objek yang tersimpan */
  tambah(data){
    const list = this.ambilSemua();
    const now = new Date();
    const item = {
      id: "PST-" + now.getTime().toString(36).toUpperCase(),
      tanggalDaftar: now.toISOString(),
      status: "Menunggu Verifikasi",
      ...data,
    };
    list.unshift(item);
    this.simpanSemua(list);
    return item;
  },

  /** Perbarui status pendaftar */
  updateStatus(id, status){
    const list = this.ambilSemua();
    const idx = list.findIndex(p => p.id === id);
    if(idx > -1){ list[idx].status = status; this.simpanSemua(list); }
    return list;
  },

  /** Hapus satu pendaftar */
  hapus(id){
    const list = this.ambilSemua().filter(p => p.id !== id);
    this.simpanSemua(list);
    return list;
  },

  /** Hapus semua data (dengan konfirmasi dilakukan di UI) */
  hapusSemua(){
    this.simpanSemua([]);
  },

  /** Isi data contoh untuk keperluan demo/presentasi */
  isiContoh(){
    const contoh = [
      { nama:"Fransiskus Nong", nik:"5301010101010001", jkel:"Laki-laki", hp:"081234560001", email:"fransiskus@example.com", program:"Junior Web Programmer", pendidikan:"SMA/SMK", alamat:"Maumere, Sikka" },
      { nama:"Maria Imakulata", nik:"5301010101010002", jkel:"Perempuan", hp:"081234560002", email:"maria@example.com", program:"Digital Marketing", pendidikan:"D3", alamat:"Maumere, Sikka" },
      { nama:"Yosef Pareira", nik:"5301010101010003", jkel:"Laki-laki", hp:"081234560003", email:"yosef@example.com", program:"Tata Boga & Pastry", pendidikan:"SMA/SMK", alamat:"Kewapante, Sikka" },
    ];
    contoh.forEach(c => this.tambah(c));
  },

  /** Ekspor sebagai CSV lalu memicu unduhan file */
  eksporCSV(){
    const list = this.ambilSemua();
    if(list.length === 0){ alert("Belum ada data peserta untuk diekspor."); return; }
    const kolom = ["id","nama","nik","jkel","tempatLahir","tglLahir","alamat","hp","email","pendidikan","program","status","tanggalDaftar"];
    const header = kolom.join(",");
    const rows = list.map(p => kolom.map(k => `"${(p[k]||"").toString().replace(/"/g,'""')}"`).join(","));
    const csv = [header, ...rows].join("\n");
    unduhFile(csv, "data-peserta-lpk.csv", "text/csv;charset=utf-8;");
  },

  /** Ekspor sebagai JSON lalu memicu unduhan file */
  eksporJSON(){
    const list = this.ambilSemua();
    if(list.length === 0){ alert("Belum ada data peserta untuk diekspor."); return; }
    unduhFile(JSON.stringify(list, null, 2), "data-peserta-lpk.json", "application/json");
  },
};

function unduhFile(konten, namaFile, tipe){
  const blob = new Blob([konten], { type:tipe });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = namaFile;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* -------------------- Gate admin sederhana (client-side) -------------------- */
const AdminAuth = {
  isLoggedIn(){ return sessionStorage.getItem(LPK_SESSION_KEY) === "1"; },
  login(password){
    const saved = localStorage.getItem(LPK_ADMIN_KEY) || DEFAULT_ADMIN_PASSWORD;
    if(password === saved){ sessionStorage.setItem(LPK_SESSION_KEY, "1"); return true; }
    return false;
  },
  logout(){ sessionStorage.removeItem(LPK_SESSION_KEY); },
  ubahPassword(lama, baru){
    const saved = localStorage.getItem(LPK_ADMIN_KEY) || DEFAULT_ADMIN_PASSWORD;
    if(lama !== saved) return false;
    localStorage.setItem(LPK_ADMIN_KEY, baru);
    return true;
  }
};
