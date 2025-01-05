import { products } from './products.js';
import { cart, addToCart } from './cart.js';

let productsHTML = '';

// Generate produk HTML
products.forEach((product) => {
    productsHTML += `

<div class="col-md-6 col-lg-4 col-xl-3">
  <div class="menu-container">
    <div class="rounded position-relative fruite-item menu-flower">
      <div class="fruite-img">
        <img src=${product.image} class="img-fluid w-100 rounded-top">
      </div>
      <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Electronic</div>
      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
        <h4 class="title-desk">${product.nama}</h4>
        <p class="title-desk">${product.deskripsi}</p>
        <div class="d-flex justify-content-between flex-lg-wrap">
          <p class="text-dark fs-5 fw-bold mb-0">Rp${(product.harga)}</p>
        </div>
        <div class="d-flex my-3">
          <img src=${product.rating}>
        </div>
        <div class="d-flex gap-2">
          <!-- Tombol Selengkapnya -->
          <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#productModal-${product.id}">
            Selengkapnya
          </button>
          <!-- Tombol Add to Cart -->
          <button class="btn btn-primary js-add-cart" data-product-id="${product.id}">
            <i class="fa fa-shopping-bag me-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="productModal-${product.id}" tabindex="-1" aria-labelledby="productModalLabel-${product.id}" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel-${product.id}">${product.nama}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src=${product.image} class="img-fluid w-100 mb-3">
          <p><strong>Description:</strong> ${product.deskripsi}</p>
          <p><strong>Price:</strong> Rp${product.harga}</p>
          <p><strong>Rating:</strong> <img src=${product.rating} alt="Rating"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>


        
        
                `;
});




document.querySelector('.js-grid').innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })

    document.querySelector('#cart-badge').innerHTML = cartQuantity;
}
// Masukkan elemen HTML ke dalam DOM

document.querySelectorAll('.js-add-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId
            addToCart(productId);
            updateCartQuantity();
        });
    })







