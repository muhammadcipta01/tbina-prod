// --- SIMULASI BACKEND (Data Tiruan Ditingkatkan) ---
const mockDatabase = {
    // Data Kunci Utama (QR Code ID)
    "V008341114@79100-010KP-14@C8ALD@@1@@@": {
        nama: "C8HD FRON LH",
        model: "C8HD", 
        spek: "Cover Kulit, Warna hitam dan Coklat ditengan, Air bag.",
        foto_url: "http://127.0.0.1:5500/asset/c8hd_fron.png"
    },
    "V008341144@79100-VT091-E6@CSHD@@1@@@": {
        nama: "CPA FRON LH",
        model: "CMPV", 
        spek: "Cover Kulit, Warna full hitam , Non Air bag.",
        foto_url: "http://127.0.0.1:5500/asset/cpa fron.png"
    },
    "GADGET-001": {
        nama: "Smartwatch Seri 7 GPS",
        model: "SMART-7", 
        spek: "Layar OLED, Waterproof, Monitor Detak Jantung.",
        foto_url: "https://via.placeholder.com/200/555555/FFFFFF?text=SMARTWATCH"
    }
};
// END SIMULASI BACKEND

document.addEventListener('DOMContentLoaded', () => {
    // Ambil parameter dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const query = urlParams.get('query');

    if (type && query) {
        // Lakukan pencarian (Simulasi Panggilan API ke Backend)
        fetchItemDetails(type, query);
    } else {
        // Jika tidak ada parameter
        displayError("Tidak ada ID atau Model yang dimasukkan.");
    }
});

// FUNGSI PENCARIAN (Menerima tipe dan query dari URL)
function fetchItemDetails(type, query) {
    document.getElementById('loading-status').style.display = 'block';

    // --- SIMULASI PANGGILAN API (Pencarian di mockDatabase) ---
    let itemData = null;
    let displayId = query;
    
    if (type === 'qrcode') {
        itemData = mockDatabase[query];
    } else if (type === 'model') {
        // Cari berdasarkan Model
        for (const key in mockDatabase) {
            if (mockDatabase[key].model === query) {
                itemData = mockDatabase[key];
                displayId = key; // Tampilkan QR Code ID yang ditemukan
                break;
            }
        }
    }
    // --- AKHIR SIMULASI ---

    document.getElementById('loading-status').style.display = 'none';

    if (itemData) {
        displayItem(itemData, displayId);
    } else {
        displayError(`"${query}" (${type}) tidak ditemukan dalam database.`);
    }
}

function displayItem(data, displayId) {
    document.getElementById('item-details').style.display = 'block';
    document.getElementById('display-id').textContent = displayId;
    document.getElementById('display-nama').textContent = data.nama;
    document.getElementById('display-spek').textContent = data.spek;
    
    const photoEl = document.getElementById('display-foto');
    photoEl.src = data.foto_url;
    photoEl.style.display = 'block';
}

function displayError(message) {
    document.getElementById('item-details').style.display = 'block';
    document.getElementById('display-id').textContent = 'ERROR';
    document.getElementById('display-nama').textContent = '—';
    document.getElementById('display-spek').textContent = message;
    
    document.getElementById('display-foto').style.display = 'none';
}