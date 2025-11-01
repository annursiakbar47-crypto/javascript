

// EXAMPLE OF >>>>>>> IF STATEMENTS


function login() {

    let email = prompt("Masukan Email")
    let pw = prompt("Masukan Password")

    if (!email || !pw) {
        alert("Email atau Password Belom Di isi")
        console.log("Login Gagal")
    } else if (email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil")
    } else {
        alert("Email Atau Password anda salah")
        console.log("Login Gagal")
    }
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level Anda")

    if (statusPengguna === 'aktif') {

        console.log("Pengguna aktif terdeteksi");
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

//EXAMPLE OF SWITCH 

function listMenu() {
    if (confirm("Anda mau makan ?")) {
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')
        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
        }
    }
}


function f1() {
    
    let condition = 13
    let anotherConditon = 35

    if (condition) {
        /// TRUE
    } else if (anotherConditon) {
        // TRUE
    } else {
        // FALSE
    }
}

// Penjelasan:
// if digunakan untuk menjalankan sebuah kode jika kondisi bernilai true (benar).

if (angka > 10) {
    console.log("Angka lebih besar dari 10");
}

//else if digunakan untuk mengecek kondisi tambahan jika kondisi sebelumnya bernilai false (salah).

if (angka > 10) {
    console.log("Angka lebih besar dari 10");
} else if (angka == 10) {
    console.log("Angka sama dengan 10");
//else digunakan untuk menjalankan sebuah kode jika semua kondisi sebelumnya bernilai false (salah).

if (angka > 10) {
    console.log("Angka lebih besar dari 10");
} else if (angka == 10) {
    console.log("Angka sama dengan 10");
} else {
    console.log("Angka lebih kecil dari 10");
}
//switch digunakan untuk memilih salah satu dari beberapa blok kode yang akan dijalankan berdasarkan nilai dari sebuah variabel atau ekspresi.
switch (hari) {
    case 1:
        console.log("Hari ini adalah Senin");
        break;
    case 2:
        console.log("Hari ini adalah Selasa");
        break;
    case 3:
        console.log("Hari ini adalah Rabu");
        break;
    default:
        console.log("Hari tidak dikenali");
        break;
}           //break digunakan untuk menghentikan eksekusi dalam sebuah blok switch setelah sebuah case dijalankan.                  
//default digunakan untuk menangani kasus di mana tidak ada case yang sesuai dengan nilai variabel atau ekspresi dalam sebuah blok switch.
//Contoh penggunaan if, else if, else, switch, break, dan default dalam JavaScript telah dijelaskan di atas.
                                                                                