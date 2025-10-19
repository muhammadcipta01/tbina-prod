// display.js

// --- DATA SIMULASI (Pengganti Database) ---
const MOCK_DATABASE = {
    "PROD-ABC-456": {
        nama: "Kopi Arabika Premium 250g",
        model: "ARABIKA-P250", 
        spek: "Roasted Bean, Grade A, Asal Gunung Ijen, Expiry 2026. Cocok untuk manual brew.",
        foto_url: "https://via.placeholder.com/250/402010/FFFFFF?text=KOPI"
    },
    "B-101-XYZ": {
        nama: "Buku Panduan ReactJS Edisi 5",
        model: "REACT-E5", 
        spek: "Edisi Ke-5, 400 halaman, ISBN: 978-0133989078. Panduan lengkap hooks dan routing.",
        foto_url: "https://via.placeholder.com/250/007bff/FFFFFF?text=BUKU"
    },
    // Data yang dicari setelah ekstraksi @CSHD
    "@CPA@@1@@@": {
        nama: "CPA FRON",
        model: "CPA FRON", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK , ",
        foto_url: "asset/cpa fron.png"
    },
    "@C8ALD@@1@@@": {
        nama: "C8ALD FRON", 
        model: "C8ALD FRON", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK ,.",
        foto_url: "asset/c8hd_fron.png"
    }
};
// --------------------------------------------------------

const PENANDA_LIST = [
    "@C8ALD", // Penanda Pertama (dari input Anda)
    "@CSHD"    // Penanda Kedua (contoh penanda inventaris lain)
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mengambil parameter pencarian dari URL (query string)
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const query = urlParams.get('query');

    if (type && query) {
        fetchItemDetails(type, query);
    } else {
        displayError("Tidak ada ID atau Model yang dimasukkan.");
    }
});

/**
 * Mengambil data barang berdasarkan tipe (qrcode/model) dan query.
 */
function fetchItemDetails(type, query) {
    document.getElementById('loading-status').style.display = 'block';
    
    let itemData = null;
    let displayId = query; // Nilai default ID yang ditampilkan
    
    if (type === 'qrcode') {
        const kode_lengkap = query;
        const posisi_awal = kode_lengkap.indexOf(PENANDA_AWAL); // Mencari posisi "@CSHD"

        if (posisi_awal !== -1) { 
            // Jika ditemukan, ambil sub-string dari posisi itu sampai akhir
            const kode_sebagian = kode_lengkap.substring(posisi_awal);
            
            // Gunakan kode yang telah diekstrak untuk pencarian di database
            displayId = kode_sebagian; 
            itemData = MOCK_DATABASE[kode_sebagian];
        } else {
            // Jika tidak ditemukan, gunakan kode mentah (query) untuk pencarian
            itemData = MOCK_DATABASE[kode_lengkap];
        }

    } else if (type === 'model') {
        // Logika Pencarian Model
        for (const key in MOCK_DATABASE) {
            if (MOCK_DATABASE[key].model === query) {
                itemData = MOCK_DATABASE[key];
                displayId = key; // Tampilkan ID QR Code yang sesuai
                break;
            }
        }
    }

    document.getElementById('loading-status').style.display = 'none';

    if (itemData) {
        displayItem(itemData, displayId);
    } else {
        displayError(`"${query}" (${type}) tidak ditemukan dalam database.`);
    }
}
function fetchItemDetails(type, query) {
    document.getElementById('loading-status').style.display = 'block';
    
    let itemData = null;
    let displayId = query;
    
    if (type === 'qrcode') {
        const kode_lengkap = query;
        let kode_sebagian_ditemukan = false;

        // 1. ITERASI MELALUI DAFTAR PENANDA
        for (const penanda of PENANDA_LIST) {
            const posisi_awal = kode_lengkap.indexOf(penanda);

            if (posisi_awal !== -1) {
                // 2. Jika penanda ditemukan, ambil sub-string
                const kode_sebagian = kode_lengkap.substring(posisi_awal);
                
                // Gunakan kode yang diekstrak untuk pencarian
                displayId = kode_sebagian; 
                itemData = MOCK_DATABASE[kode_sebagian];
                kode_sebagian_ditemukan = true;
                break; // Hentikan iterasi setelah penanda pertama yang valid ditemukan
            }
        }

        // 3. Jika tidak ada penanda yang ditemukan, gunakan kode mentah
        if (!kode_sebagian_ditemukan) {
             itemData = MOCK_DATABASE[kode_lengkap];
        }

    } else if (type === 'model') {
        // Logika Pencarian Model (tetap sama)
        for (const key in MOCK_DATABASE) {
            if (MOCK_DATABASE[key].model === query) {
                itemData = MOCK_DATABASE[key];
                displayId = key;
                break;
            }
        }
    }

    document.getElementById('loading-status').style.display = 'none';

    if (itemData) {
        displayItem(itemData, displayId);
    } else {
        displayError(`"${query}" (${type}) tidak ditemukan dalam database.`);
    }
}

/**
 * Menampilkan detail barang yang sukses ditemukan.
 */
function displayItem(data, displayId) {
    document.getElementById('item-details').style.display = 'block';
    document.getElementById('display-id').textContent = displayId;
    document.getElementById('display-nama').textContent = data.nama;
    document.getElementById('display-spek').textContent = data.spek;
    
    const photoEl = document.getElementById('display-foto');
    photoEl.src = data.foto_url;
    photoEl.style.display = 'block'; // Memastikan foto terlihat
}

/**
 * Menampilkan pesan error jika barang tidak ditemukan.
 */
function displayError(message) {
    document.getElementById('item-details').style.display = 'block';
    document.getElementById('display-id').textContent = '—';
    document.getElementById('display-nama').textContent = 'BARANG TIDAK DITEMUKAN';
    document.getElementById('display-spek').textContent = message;
    
    document.getElementById('display-foto').style.display = 'none';
}