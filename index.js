let html5QrcodeScanner;
const scannerId = "reader";
let isScannerPaused = false; 
const RESCAN_DELAY_MS = 3000; 

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi dan Render Pemindai
    html5QrcodeScanner = new Html5QrcodeScanner(
        scannerId, 
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});

// FUNGSI INTI: Dipanggil saat QR Code berhasil dipindai
function onScanSuccess(decodedText, decodedResult) {
    if (isScannerPaused) return; 

    // Jeda pemindai sebentar
    html5QrcodeScanner.pause(true); 
    isScannerPaused = true;
    
    document.getElementById('search-status').textContent = "QR Code Ditemukan: " + decodedText;

    // LANGKAH PENTING: Pindah ke halaman display
    redirectToDisplay('qrcode', decodedText);
    
    // Setelah jeda, lanjutkan pemindaian (untuk mode auto-rescan, jika user kembali)
    setTimeout(() => {
        html5QrcodeScanner.resume(); 
        isScannerPaused = false;
        document.getElementById('search-status').textContent = "Siap memindai lagi...";
    }, RESCAN_DELAY_MS);
}

function onScanFailure(error) {
    // ...
}

// FUNGSI PENCARIAN MANUAL
function searchManual(type) {
    let query;
    if (type === 'qrcode') {
        query = document.getElementById('input-qrcode-id').value.trim();
    } else if (type === 'model') {
        query = document.getElementById('input-model').value.trim();
    }
    
    if (query) {
        document.getElementById('search-status').textContent = "Mencari data manual...";
        
        // LANGKAH PENTING: Pindah ke halaman display
        redirectToDisplay(type, query.toUpperCase()); 
        
    } else {
        document.getElementById('search-status').textContent = "Masukkan nilai pencarian terlebih dahulu.";
    }
}

// FUNGSI NAVIGASI PUSAT
function redirectToDisplay(type, query) {
    // Menggunakan URL Parameters untuk mengirim tipe pencarian dan query
    const url = `display.html?type=${type}&query=${encodeURIComponent(query)}`;
    window.location.href = url;
}