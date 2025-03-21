// Class Kendaraan 
class Kendaraan {
    constructor(id, nama, jenis) {
      this.id = id;
      this.nama = nama;
      this.jenis = jenis;
    }
  }
  
  // Class Pelanggan sesuai dengan tugas
  class Pelanggan {
    constructor(nama, nomorTelepon) {
      this.nama = nama;
      this.nomorTelepon = nomorTelepon;
      this.kendaraanDisewa = null;
    }
    
    // Metode untuk mencatat transaksi penyewaan
    sewaKendaraan(kendaraan) {
      this.kendaraanDisewa = kendaraan;
      return `${this.nama} berhasil menyewa ${kendaraan.nama}`;
    }
    
    // Metode untuk menampilkan info pelanggan
    getInfo() {
      if (this.kendaraanDisewa) {
        return `${this.nama} (${this.nomorTelepon}) - Menyewa: ${this.kendaraanDisewa.nama} (${this.kendaraanDisewa.jenis})`;
      } else {
        return `${this.nama} (${this.nomorTelepon}) - Tidak menyewa kendaraan`;
      }
    }
  }
  
  // Class SistemManajemen untuk mengelola daftar pelanggan
  class SistemManajemen {
    constructor() {
      this.daftarPelanggan = [];
    }
    
    // Menambahkan pelanggan ke sistem
    tambahPelanggan(pelanggan) {
      this.daftarPelanggan.push(pelanggan);
    }
    
    // Menampilkan daftar pelanggan yang menyewa kendaraan
    daftarPelangganMenyewa() {
      const pelangganMenyewa = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);
      
      if (pelangganMenyewa.length === 0) {
        return "Tidak ada pelanggan yang sedang menyewa kendaraan.";
      }
      
      let hasil = "DAFTAR PELANGGAN YANG MENYEWA KENDARAAN:\n";
      pelangganMenyewa.forEach((p, index) => {
        hasil += `${index + 1}. ${p.getInfo()}\n`;
      });
      
      return hasil;
    }
  }
  
  // Contoh penggunaan
  // Membuat beberapa kendaraan
  const mobil1 = new Kendaraan("M1", "Avanza", "MPV");
  const mobil2 = new Kendaraan("M2", "Brio", "City Car");
  const motor1 = new Kendaraan("MT1", "Vario", "Skuter");
  
  // Membuat sistem
  const sistem = new SistemManajemen();
  
  // Membuat pelanggan
  const pelanggan1 = new Pelanggan("Budi", "081234567890");
  const pelanggan2 = new Pelanggan("Siti", "089876543210");
  const pelanggan3 = new Pelanggan("Andi", "087654321098");
  
  // Menambahkan pelanggan ke sistem
  sistem.tambahPelanggan(pelanggan1);
  sistem.tambahPelanggan(pelanggan2);
  sistem.tambahPelanggan(pelanggan3);
  
  // Pelanggan menyewa kendaraan
  console.log(pelanggan1.sewaKendaraan(mobil1));
  console.log(pelanggan3.sewaKendaraan(motor1));
  
  // Menampilkan daftar pelanggan yang menyewa
  console.log(sistem.daftarPelangganMenyewa());