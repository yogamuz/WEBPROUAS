import { cart } from "../controller/cart.js";
import { getProduct } from "../controller/products.js";
import { formatHarga } from "../utils/money.js";
// import { checkoutToWhatsApp } from "./pesan-wa.js";

export function renderPaymentSummary() {
    let totalHargaProduk = 0; // Subtotal harga produk
    
    // Hitung subtotal harga produk
    cart.forEach((cartItem, ) => {
        const product = getProduct(cartItem.productId);
        totalHargaProduk += product.harga * cartItem.quantity;
    });


    // Tentukan biaya pengiriman
    let shippingCost = totalHargaProduk === 0
        ? 0
        : totalHargaProduk >= 250
            ? 0
            : 30;


    // Hitung total keseluruhan
    const totalKeseluruhan = totalHargaProduk + shippingCost;
    const currentDate = new Date(); // Tanggal sekarang
    const deliveryDate = new Date(currentDate); // Salin tanggal sekarang
    deliveryDate.setDate(currentDate.getDate() + 1); // Tambahkan 1 hari

    // Format tanggal pengiriman sesuai format lokal
    const formattedDeliveryDate = deliveryDate.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
    });

    // Render HTML
    const paymentSummaryHTML = `
    
        <div class="row g-4 justify-content-end js-delivery-total">
            <div class="col-8"></div>
            <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div class="bg-light rounded">
                    <div class="p-4">
                        <h1 class="display-6 mb-4">Cart
                            <span class="fw-normal">Total</span>
                        </h1>
                        <div class="d-flex justify-content-between mb-4">
                            <h5 class="mb-0 me-4">Subtotal</h5>
                            <p class="mb-0">Rp${formatHarga(totalHargaProduk)}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-0 me-4">Biaya Pengiriman</h5>
                            <div class="">
                                <p class="mb-0">Rp${formatHarga(shippingCost)}</p>
                            </div>
                        </div>
                        <div class="delivery-date">
                            <h5 class="mb-0 me-4">Estimasi Tiba</h5>
                            </div>
                            <p class="mb-0 text-end shipping-date">${formattedDeliveryDate}</p>

                    </div>
                    <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                        <h5 class="mb-0 ps-4 me-4">Total</h5>
                        <p class="mb-0 pe-4">Rp${formatHarga(totalKeseluruhan)}</p>
                    </div>
                    <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4 js-checkout-btn" type="button">Proceed Checkout</button>
                </div>
            </div>
        </div>
    `;

    // Render ke DOM
    document.querySelector('.js-delivery-total').innerHTML = paymentSummaryHTML;
    document.querySelector('.js-checkout-btn').addEventListener('click', () => {
        checkoutToWhatsApp(cart)
    })
    function checkoutToWhatsApp(cart) {
        const nomorWhatsApp = "620895360854700"; // Ganti dengan nomor tujuan
        const pesan = generateWhatsAppMessage(cart);
        const encodedPesan = encodeURIComponent(pesan);
    
        // Redirect ke WhatsApp
        window.open(`https://wa.me/${nomorWhatsApp}?text=${encodedPesan}`, "_blank");
    }
    function generateWhatsAppMessage(cart) {
        let message = "Halo Elecstore, saya ingin memesan produk berikut:\n\n";
    
        cart.forEach((cartItem, index) => {
            const productId = cartItem.productId;
            const matchingProduct = getProduct(productId)
            message += `${index + 1}. ${matchingProduct.nama} (${cartItem.quantity} Pcs)\n    Harga: Rp${formatHarga(matchingProduct.harga * cartItem.quantity)}\n`;
        });
        
        message += `\n\nBiaya Pengiriman: Rp${formatHarga(shippingCost)} \nTotal: Rp${formatHarga(totalKeseluruhan)} \n\nMohon informasi lebih lanjut untuk pembayaran. Terima kasih!`;
    
        return message;
    }


};


