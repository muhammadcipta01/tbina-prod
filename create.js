import { createNewItem } from './data.js';

document.getElementById('create-form').addEventListener('submit', handleCreateItem);

function handleCreateItem(event) {
    event.preventDefault();

    const qrId = document.getElementById('new-qrcode-id').value.trim().toUpperCase();
    const model = document.getElementById('new-model').value.trim().toUpperCase();
    const nama = document.getElementById('new-nama').value.trim();
    const spek = document.getElementById('new-spek').value.trim();
    const fotoUrl = document.getElementById('new-foto-url').value.trim();
    
    const messageEl = document.getElementById('message');

    if (!qrId || !model || !nama || !spek || !fotoUrl) {
        messageEl.style.color = 'red';
        messageEl.textContent = 'Semua kolom harus diisi!';
        return;
    }

    const newItem = { qrId, model, nama, spek, fotoUrl };
    
    const success = createNewItem(newItem);
    
    if (success) {
        messageEl.style.color = 'green';
        messageEl.textContent = `Barang '${nama}' berhasil ditambahkan! ID: ${qrId}`;
        document.getElementById('create-form').reset();
    } else {
        messageEl.style.color = 'red';
        messageEl.textContent = `Gagal: ID QR Code '${qrId}' sudah ada dalam database.`;
    }
}