// --- FUNGSI UTAMA UNTUK MENGELOLA DATA BARANG ---

const LOCAL_STORAGE_KEY = 'barangDatabase';

// Data awal (akan disimpan ke Local Storage pertama kali)
const initialDatabase = {
    "PROD-ABC-456": {
        nama: "Kopi Arabika Premium 250g",
        model: "ARABIKA-P250", 
        spek: "Roasted Bean, Grade A, Asal Gunung Ijen, Expiry 2026.",
        foto_url: "https://via.placeholder.com/200/402010/FFFFFF?text=KOPI+PREMIUM"
    },
    "B-101-XYZ": {
        nama: "Buku Panduan ReactJS Edisi 5",
        model: "REACT-E5", 
        spek: "Edisi Ke-5, 400 halaman, ISBN: 978-0133989078.",
        foto_url: "https://via.placeholder.com/200/007bff/FFFFFF?text=BUKU+REACT"
    }
};

/**
 * Mengambil database dari Local Storage, jika tidak ada, menggunakan data awal.
 * @returns {object} Database barang
 */
function getDatabase() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    }
    // Jika tidak ada data di Local Storage, inisialisasi dengan data awal
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialDatabase));
    return initialDatabase;
}

/**
 * Menyimpan database ke Local Storage.
 * @param {object} db - Objek database yang akan disimpan.
 */
function saveDatabase(db) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(db));
}

/**
 * Menambah barang baru ke database.
 * @param {object} newItem - Objek barang baru.
 * @returns {boolean} True jika sukses, False jika ID sudah ada.
 */
function createNewItem(newItem) {
    const db = getDatabase();
    const qrId = newItem.qrId;
    
    if (db.hasOwnProperty(qrId)) {
        return false; // ID sudah ada
    }
    
    db[qrId] = {
        nama: newItem.nama,
        model: newItem.model,
        spek: newItem.spek,
        foto_url: newItem.fotoUrl
    };
    
    saveDatabase(db);
    return true;
}

// Ekspor fungsi untuk digunakan di file JS lain
export { getDatabase, createNewItem };