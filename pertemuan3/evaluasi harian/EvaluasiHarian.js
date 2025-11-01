function cekNilai() {
    let nilai = document.getElementById("nilaiInput").value;
    let grade = "";
    let keterangan = "";

    if (nilai >= 90) {
        grade = "A";
        keterangan = "Sangat Baik";
    } else if (nilai >= 80) {
        grade = "B";
        keterangan = "Bagus";
    } else if (nilai >= 70) {
        grade = "C";
        keterangan = "Cukup";
    } else if (nilai >= 60) {
        grade = "D";
        keterangan = "Kurang";
    } else {
        grade = "E";
        keterangan = "Sangat Kurang";
    }

    document.getElementById("hasil").innerText = `Nilai kamu: ${grade} (${keterangan})`;
}
