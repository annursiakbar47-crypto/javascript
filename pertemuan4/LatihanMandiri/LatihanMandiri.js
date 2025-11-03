function hitungLuas(sisi) {
    return sisi * sisi;
}

function hitung() {
    const sisi = document.getElementById("sisi").value;

    if (sisi === "" || sisi <= 0) {
        document.getElementById("hasil").innerText = "Input tidak valid!";
        return;
    }

    const hasil = hitungLuas(sisi);
    document.getElementById("hasil").innerText = "Luas persegi: " + hasil;
};
