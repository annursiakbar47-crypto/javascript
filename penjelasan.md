String = Tipe data untuk teks, selalu ditulis menggunakan tanda kutip: " " atau ' '
contoh:
let nama = "Akbar";
console.log(nama);
number = Tipe data angka, bisa bilangan bulat (integer) atau desimal.
contoh:
let umur = 25;
console.log(umur);
boolean = Tipe data yang hanya memiliki dua nilai: true (benar) atau false (salah).
contoh:
let isStudent = true;
console.log(isStudent);
null = Tipe data yang menunjukkan ketiadaan nilai.
contoh:
let dataKosong = null;
console.log(dataKosong);
undefined = Tipe data yang menunjukkan variabel belum memiliki nilai.
contoh:
let belumDidefinisikan;
console.log(belumDidefinisikan);    



`+`       Penjumlahan =`9 + 1`
`-`       Pengurangan =`10 - 3` 
`*`       Perkalian =`4 * 2`  
`/`       Pembagian =`20 / 4` 
`%`       Modulus (sisa pembagian)`10 % 3`
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333
console.log(a % b);  // 1

| `==`=sama nilai
| `===`=sama nilai & tipe 
| `!=`=tidak sama nilai
| `!==`=tidak sama nilai & tipe
| `>`=lebih besar
| `<`=lebih kecil
| `>=`=lebih besar / sama
| `<=`=lebih kecil / sama

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 3);     // true
console.log(4 <= 2);     // false

| `&&` = DAN – semua kondisi harus true
| `||` = ATAU - salah satu true itu udh cukup
| `!`  = NOT – membalikan fakta

let umur = 20;
let punyaSIM = true;

console.log(umur >= 17 && punyaSIM); // true (dua-duanya benar)
console.log(umur >= 17 || punyaSIM); // true (salah satu benar)
console.log(!punyaSIM);              // false (karena aslinya true)


