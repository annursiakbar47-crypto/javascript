// Arrow function konversi Celcius ke Fahrenheit
const konversiSuhu = celcius => (celcius * 9/5) + 32;

// Fungsi utama tombol
const konversi = () => {
    const celcius = document.getElementById("celcius").value;

    if (celcius === "") {
        document.getElementById("hasil").innerText = "Masukkan angka dulu!";
        return;
    }

    const fahrenheit = konversiSuhu(celcius);
    document.getElementById("hasil").innerText = `${celcius}°C = ${fahrenheit}°F`;
};
