import { cart, removeFromCart, saveToStorage } from '../controller/cart.js';
import { getProduct } from '../controller/products.js';
import { formatHarga } from '../utils/money.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary() {
    let cartItemsHTML = ''; // Hanya untuk produk dalam keranjang

    cart.forEach((cartItem) => {
        const productId = cartItem.productId; // variabel untuk array cart
        const matchingProduct = getProduct(productId) // variabel untuk array produk



        cartItemsHTML += `
        <tr class="js-order-container-${matchingProduct.id}">        
            <th scope="row">
                <div class="d-flex align-items-center">
                    <img
                        src=${matchingProduct.image}
                        class="img-fluid me-5 rounded-circle"
                        style="width: 80px; height: 80px;"
                        alt=""
                    >
                </div>
            </th>
            <td>
                <p class="mb-0 mt-4">${matchingProduct.nama}</p>
            </td>
            <td>
                <p class="mb-0 mt-4">Rp${(matchingProduct.harga)}</p>
            </td>
            <td>
                <div class="input-group quantity mt-4" style="width: 100px;">
                    <div class="input-group-btn">
                    <button 
                        class="btn btn-sm btn-minus rounded-circle bg-light border minus-btn" data-product-idmin="${matchingProduct.id}">
                        <i class="fa fa-minus"></i>
                    </button>

                        </div>
                        <input type="text" class="form-control form-control-sm text-center border-0 input-value" value="${cartItem.quantity}">
                        <div class="input-group-btn">
                    <button 
                        class="btn btn-sm btn-plus rounded-circle bg-light border plus-btn" data-product-idplus="${matchingProduct.id}" >
                        <i class="fa fa-plus"></i>
                    </button>

                    </div>
                </div>
            </td>
            <td>
                <p class="mb-0 mt-4">Rp${formatHarga(matchingProduct.harga * cartItem.quantity)}</p>
            </td>
            <td>
                <button class="btn btn-md rounded-circle bg-light border mt-4 js-delete-button" data-product-id="${matchingProduct.id}">
                    <i class="fa fa-times text-danger"></i>
                </button>
            </td>
        </tr>`;
    });

    // Container utama dengan daftar produk di dalamnya
    const cartSummaryHTML = `
                                <div class="container-fluid py-5 js-order-container">
                                    <div class="container py-5">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Products</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Total</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="js-order-row">
                                                    ${cartItemsHTML}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>`;

    // Render HTML ke DOM
    document.querySelector('.js-order-container').innerHTML = cartSummaryHTML;

    // Tambahkan event listener untuk tombol hapus
    document.querySelectorAll('.js-delete-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            removeFromCart(productId);
            const container = document.querySelector(`.js-order-container-${productId}`);
            container.remove();
            renderPaymentSummary()
        });
    });
    document.querySelectorAll('.minus-btn').forEach((button) => {
        button.addEventListener('click', () => {
            // Cari input yang terkait dengan tombol minus ini
            const inputValue = button.closest('.input-group').querySelector('.input-value');
            let currentValue = parseInt(inputValue.value); // Ambil nilai input (kuantitas) dan ubah jadi angka
            const productId = button.dataset.productIdmin; // Ambil ID produk
            const cartItem = cart.find(item => item.productId === productId); // Temukan item di cart
    
            if (currentValue > 1) { // Pastikan nilai tidak kurang dari 1
                currentValue--; // Kurangi 1 menggunakan decrement
                inputValue.value = currentValue; // Update nilai input
                cartItem.quantity = currentValue; // Perbarui kuantitas di array cart
            }
    
            // Perbarui harga total
            const totalElement = button.closest('tr').querySelector('td:nth-child(5) p');
            const matchingProduct = getProduct(productId);
            totalElement.textContent = `Rp${formatHarga(matchingProduct.harga * cartItem.quantity)}`;
            
            saveToStorage()
            renderPaymentSummary(); // Render ulang ringkasan pembayaran
        });
    });
    
    document.querySelectorAll('.plus-btn').forEach((button) => {
        button.addEventListener('click', () => {
            // Cari input yang terkait dengan tombol plus ini
            const inputValue = button.closest('.input-group').querySelector('.input-value');
            let currentValue = parseInt(inputValue.value); // Ambil nilai input (kuantitas) dan ubah jadi angka
            const productId = button.closest('tr').querySelector('.plus-btn').dataset.productIdplus; // Ambil ID produk
            const cartItem = cart.find(item => item.productId === productId); // Temukan item di cart
    
            currentValue++; // Tambah 1 menggunakan increment
            inputValue.value = currentValue; // Update nilai input
            cartItem.quantity = currentValue; // Perbarui kuantitas di array cart
    
            // Perbarui harga total
            const totalElement = button.closest('tr').querySelector('td:nth-child(5) p');
            const matchingProduct = getProduct(productId);
            totalElement.textContent = `Rp${formatHarga(matchingProduct.harga * cartItem.quantity)}`;
            
            saveToStorage()
            renderPaymentSummary(); // Render ulang ringkasan pembayaran
        });
    });
    
    




}

renderOrderSummary()