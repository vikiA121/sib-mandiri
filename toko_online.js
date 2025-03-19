// Inisialisasi array produkToko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    // Mencari ID tertinggi yang sudah ada
    let maxId = 0;
    for (let i = 0; i < produkToko.length; i++) {
        if (produkToko[i].id > maxId) {
            maxId = produkToko[i].id;
        }
    }
    
    // Membuat ID baru (ID tertinggi + 1)
    const newId = maxId + 1;
    
    // Membuat objek produk baru
    const produkBaru = {
        id: newId,
        nama: nama,
        harga: harga,
        stok: stok
    };
    
    // Menambahkan produk baru ke array
    produkToko.push(produkBaru);
    
    console.log(`Produk ${nama} berhasil ditambahkan dengan ID: ${newId}`);
    return produkBaru;
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    // Mencari indeks produk dengan ID yang sesuai
    let indeks = -1;
    for (let i = 0; i < produkToko.length; i++) {
        if (produkToko[i].id === id) {
            indeks = i;
            break;
        }
    }
    
    // Jika produk ditemukan, hapus dari array
    if (indeks !== -1) {
        const namaProduk = produkToko[indeks].nama;
        produkToko.splice(indeks, 1);
        console.log(`Produk ${namaProduk} dengan ID: ${id} berhasil dihapus`);
        return true;
    } else {
        console.log(`Produk dengan ID: ${id} tidak ditemukan`);
        return false;
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK TOKO ===");
    
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia");
    } else {
        for (let i = 0; i < produkToko.length; i++) {
            const produk = produkToko[i];
            console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga} | Stok: ${produk.stok}`);
        }
    }
    
    console.log("==========================");
}

// Contoh penggunaan fungsi
console.log("Inisialisasi Produk Toko:");
tampilkanProduk();

console.log("\nMenambahkan produk baru:");
tambahProduk("Headset", 500000, 15);
tampilkanProduk();

console.log("\nMenghapus produk dengan ID 2:");
hapusProduk(2);
tampilkanProduk();

console.log("\nMenambahkan produk lain:");
tambahProduk("Monitor", 2500000, 3);
tampilkanProduk();