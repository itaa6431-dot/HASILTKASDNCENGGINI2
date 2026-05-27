const dataSiswa = [
  {
    nisn: "3146525710",
    nomor: "T1-26-03-35-0073-0001-8",
    nama: "MUHAMAD ROIHAN MAULIDA",
    ttl: "Tegal, 7 Januari 2014",
    matematika: "40.00",
    indonesia: "73.33"
  },
  {
    nisn: "0146637439",
    nomor: "T1-26-03-35-0073-0002-7",
    nama: "M. KHAFID ALIFAUZI",
    ttl: "Tegal, 20 Juli 2014",
    matematika: "53.33",
    indonesia: "70.00"
  },
  {
    nisn: "3142939858",
    nomor: "T1-26-03-35-0073-0003-6",
    nama: "HANIA SYAKIRA",
    ttl: "Tegal, 26 April 2014",
    matematika: "26.67",
    indonesia: "70.00"
  },
  {
    nisn: "0131884294",
    nomor: "T1-26-03-35-0073-0004-5",
    nama: "DAFI NABIL MUSYAFA",
    ttl: "Tegal, 28 Juli 2013",
    matematika: "46.67",
    indonesia: "53.33"
  },
  {
    nisn: "3133944890",
    nomor: "T1-26-03-35-0073-0005-4",
    nama: "SITI MUJILAH",
    ttl: "Tegal, 14 September 2013",
    matematika: "50.00",
    indonesia: "50.00"
  }
];

function cekData() {
  const nisnInput = document.getElementById("nisn").value;
  const hasil = document.getElementById("hasil");

  const siswa = dataSiswa.find(s => s.nisn === nisnInput);

  if (siswa) {
    hasil.innerHTML = `
      <div class="card">
        <h3>Data Hasil TKA</h3>
        <p><strong>Nama Lengkap:</strong> ${siswa.nama}</p>
        <p><strong>NISN:</strong> ${siswa.nisn}</p>
        <p><strong>Nomor Peserta:</strong> ${siswa.nomor}</p>
        <p><strong>Tempat, Tanggal Lahir:</strong> ${siswa.ttl}</p>
        <p><strong>Nilai Matematika:</strong> ${siswa.matematika}</p>
        <p><strong>Nilai Bahasa Indonesia:</strong> ${siswa.indonesia}</p>
      </div>
    `;
  } else {
    hasil.innerHTML = `
      <div class="card">
        <p>Data siswa tidak ditemukan.</p>
      </div>
    `;
  }
}
