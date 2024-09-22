function akarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif.";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil.";
    } else {
        return Math.sqrt(x);
    }
}

// Contoh penggunaan
const x = 16; // Ganti dengan nilai yang diinginkan
const hasil = akarPangkatDua(x);
console.log(`Hasil: ${hasil}`);
