// display.js

// --- DATA SIMULASI (Pengganti Database) ---
const MOCK_DATABASE = {
    // Data yang dicari setelah ekstraksi RR2
    "@79200-VT090-C3@CPA@@1@@@": {
        nama: "CPA RR2",
        model: "CPA RR2 RH", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK",
        model_3d_path: "asset/MEJA.glb"
    },
    "@79210-VT090-C3@CPA@@1@@@": {
        nama: "CPA RR2",
        model: "CPA RR2 LH", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK",
        foto_url: "asset/cpa fron.png"
    },
    "@79200-VT080-C3@CAC@@1@@@": {
        nama: "CAC RR2",
        model: "CAC RR2 RH", 
        spek: "Febric mid (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT080-C3@CAC@@1@@@": {
        nama: "CAC RR2",
        model: "CAC RR2 LH", 
        spek: "Febric mid (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT070-C2@CLC@@1@@@": {
        nama: "CLC RR2",
        model: "CLC RR2 RH", 
        spek: "Captain Febric mid (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT070-C2@CLC@@1@@@": {
        nama: "CLC RR2",
        model: "CLC RR2 LH", 
        spek: "Captain Febric mid (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT050-C1@CSC@@1@@@": {
        nama: "CSC RR2",
        model: "CSC RR2 RH", 
        spek: "Febric LOW (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT050-C1@CSC@@1@@@": {
        nama: "CSC RR2",
        model: "CSC RR2 RH", 
        spek: "Febric LOW (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT090-C3@CARC@@1@@@": {
        nama: "CARC RR2",
        model: "CARC RR2 RH", 
        spek: "KULIT (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT090-C3@CARC@@1@@@": {
        nama: "CARC RR2",
        model: "CARC RR2 LH", 
        spek: "KULIT (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT070-E2@CRMD@@1@@@": {
        nama: "CRMD RR2",
        model: "CRMD RR2 RH", 
        spek: "Feb Mid (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT070-E2@CRMD@@1@@@": {
        nama: "CRMD RR2",
        model: "CRMD RR2 LH", 
        spek: "Feb Mid (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT090-E4@C8HD@@1@@@": {
        nama: "C8HD RR2",
        model: "C8HD RR2 RH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT090-E4@C8HD@@1@@@": {
        nama: "C8HD RR2",
        model: "C8HD RR2 LH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT080-E3@CLHD@@1@@@": {
        nama: "CLHD RR2",
        model: "CLHD RR2 RH", 
        spek: "FEB MID (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT080-E3@CLHD@@1@@@": {
        nama: "CLHD RR2",
        model: "CLHD RR2 LH", 
        spek: "FEB MID (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT060-E1@CALD@@1@@@": {
        nama: "CALD RR2",
        model: "CALD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT060-E1@CALD@@1@@@": {
        nama: "CALD RR2",
        model: "CALD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT050-E1@CSCD@@1@@@": {
        nama: "CSCD RR2",
        model: "CSCD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT050-E1@CSCD@@1@@@": {
        nama: "CSCD RR2",
        model: "CSCD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT050-E2@CRSD@@1@@@": {
        nama: "CRSD RR2",
        model: "CRSD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT050-E2@CRSD@@1@@@": {
        nama: "CRSD RR2",
        model: "CRSD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT070-E3@CLCD@@1@@@": {
        nama: "CLCD RR2",
        model: "CLCD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT070-E3@CLCD@@1@@@": {
        nama: "CLCD RR2",
        model: "CLCD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT050-E1@CSCD@@1@@@": {
        nama: "CSCD RR2",
        model: "CSCD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT050-E1@CSCD@@1@@@": {
        nama: "CSCD RR2",
        model: "CSCD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT090-C2@CAR@@1@@@": {
        nama: "CAR RR2",
        model: "CAR RR2 RH", 
        spek: "KULIT (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT090-C2@CAR@@1@@@": {
        nama: "CAR RR2",
        model: "CAR RR2 LH", 
        spek: "KULIT (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT070-C2@CRM@@1@@@": {
        nama: "CRM RR2",
        model: "CRM RR2 RH", 
        spek: "FEB MID (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT070-C2@CRM@@1@@@": {
        nama: "CRM RR2",
        model: "CRM RR2 LH", 
        spek: "FEB MID (BLACK) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-VT050-E1@CSHD@@1@@@": {
        nama: "CSHD RR2",
        model: "CSHD RR2 RH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79210-VT050-E1@CSHD@@1@@@": {
        nama: "CSHD RR2",
        model: "CSHD RR2 LH", 
        spek: "FEB LOW (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : TIDAK ADA",
        model_3d_path: "asset/MEJA.glb" 
    },
    "@79200-010KP-16@C8ALD@@1@@@": {
        nama: "C8ALD RR2",
        model: "C8ALD RR2 RH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb" 
    },
    "@79210-010KP-16@C8ALD@@1@@@": {
        nama: "C8ALD RR2",
        model: "C8ALD RR2 LH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb" 
    },
    




};
// --------------------------------------------------------

// Daftar Penanda Awal yang harus dicari (untuk Ekstraksi Kode)
const PENANDA_LIST = [
    "@79210-VT090-C3@CPA@@1@@@", 
    "@79200-VT090-C3@CPA@@1@@@",
    "@79210-VT090-E4@C8HD@@1@@@",// Tambahkan penanda lain yang relevan jika ada
    "@79200-VT090-E4@C8HD@@1@@@",
    "@79210-VT090-C3@CARC@@1@@@",
    "@79200-VT090-C3@CARC@@1@@@",
    "@79200-VT050-E2@CRSD@@1@@@",
    "@79200-VT050-E2@CRSD@@1@@@",
    "@79200-010KP-16@C8ALD@@1@@@",
    "@79210-010KP-16@C8ALD@@1@@@"
];
// --------------------------------------------------------

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
    let displayId = query;
    
    if (type === 'qrcode') {
        const kode_lengkap = query;
        let kode_sebagian_ditemukan = false;

        // 1. ITERASI MELALUI DAFTAR PENANDA untuk Ekstraksi Kode
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

        // 3. Jika tidak ada penanda yang berhasil diekstrak, coba cari dengan kode mentah
        if (!kode_sebagian_ditemukan && !itemData) {
              itemData = MOCK_DATABASE[kode_lengkap];
        }

    } else if (type === 'model') {
        // Logika Pencarian Model
        for (const key in MOCK_DATABASE) {
            if (MOCK_DATABASE[key].model === query) {
                itemData = MOCK_DATABASE[key];
                displayId = key;
                break;
            }
        }
    }

    // Simulasi penundaan 500ms
    setTimeout(() => {
        document.getElementById('loading-status').style.display = 'none';

        if (itemData) {
            displayItem(itemData, displayId);
        } else {
            displayError(`"${query}" (${type}) tidak ditemukan dalam database.`);
        }
    }, 500);
}


/**
 * Menampilkan detail barang yang sukses ditemukan.
 * TERMASUK LOGIKA BERALIH ANTARA 3D DAN FOTO
 */
function displayItem(data, displayId) {
    document.getElementById('item-details').style.display = 'block';
    
    // --- 1. SET DATA TEKS ---
    document.getElementById('display-id').textContent = displayId;
    document.getElementById('display-nama').textContent = data.nama;
    document.getElementById('display-spek').textContent = data.spek;
    
    // --- 2. LOGIKA TAMPILAN 3D / FOTO ---
    const modelViewer = document.getElementById('display-3d-model');
    const photoEl = document.getElementById('display-foto'); 

    if (data.model_3d_path) {
        // Tampilkan Model 3D
        modelViewer.setAttribute('src', data.model_3d_path);
        modelViewer.style.display = 'block';
        if (photoEl) photoEl.style.display = 'none'; // Sembunyikan foto jika ada
        
    } else if (data.foto_url) {
        // Tampilkan Foto Statis
        modelViewer.style.display = 'none'; // Sembunyikan 3D
        if (photoEl) {
            photoEl.setAttribute('src', data.foto_url);
            photoEl.style.display = 'block';
        }
    } else {
        // Tidak ada model 3D maupun foto
        modelViewer.style.display = 'none';
        if (photoEl) photoEl.style.display = 'none';
    }
}


/**
 * Menampilkan pesan error jika barang tidak ditemukan.
 */
function displayError(message) {
    document.getElementById('item-details').style.display = 'block';
    
    // Pastikan semua elemen media disembunyikan
    const modelViewer = document.getElementById('display-3d-model');
    const photoEl = document.getElementById('display-foto'); 
    modelViewer.style.display = 'none';
    if (photoEl) photoEl.style.display = 'none';

    // Tampilkan pesan error
    document.getElementById('display-id').textContent = '—';
    document.getElementById('display-nama').textContent = 'BARANG TIDAK DITEMUKAN';
    document.getElementById('display-spek').textContent = message;
}