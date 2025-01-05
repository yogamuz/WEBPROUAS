export function formatHarga(harga) {
    if (harga >= 1000000) {
        // Jika harga lebih dari atau sama dengan 1 juta, format ke format juta
        return `${(harga / 1000000).toFixed(3)} juta`; // Menampilkan harga dalam juta
    } else {
        // Jika harga kurang dari 1 juta, format dengan pemisah ribuan dan menambahkan .000
        return `${new Intl.NumberFormat('id-ID').format(harga)}.000`; // Menambahkan .000 untuk harga yang kurang dari 1 juta
    }
}
