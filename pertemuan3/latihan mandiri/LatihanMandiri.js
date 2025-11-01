// Fungsi cek kategori usia
function cekUsia() {
    let usia = document.getElementById("ageInput").value;
    let hasil = "";

    if (usia < 12) {
        hasil = "Kategori: Anak-anak";
    } else if (usia < 18) {
        hasil = "Kategori: Remaja";
    } else {
        hasil = "Kategori: Dewasa";
    }

    document.getElementById("hasilUsia").innerText = hasil;
}

// For loop cetak 1 hingga 10
let angka = "";
for (let i = 1; i <= 10; i++) {
    angka += i + " ";
}
document.getElementById("loopResult").innerText = angka;

// Switch cek hari
function cekHari() {
    let hari = parseInt(document.getElementById("dayInput").value);
    let namaHari = "";

    switch (hari) {
        case 1: namaHari = "Senin"; break;
        case 2: namaHari = "Selasa"; break;
        case 3: namaHari = "Rabu"; break;
        case 4: namaHari = "Kamis"; break;
        case 5: namaHari = "Jumat"; break;
        case 6: namaHari = "Sabtu"; break;
        case 7: namaHari = "Minggu"; break;
        default: namaHari = "Angka harus 1 sampai 7";
    }

    document.getElementById("hasilHari").innerText = namaHari;
}
