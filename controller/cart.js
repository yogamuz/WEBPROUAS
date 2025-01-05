export let cart = JSON.parse(localStorage.getItem('cart')); 

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
    },{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
    }]

}
export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
    let matchingItem;

    // untuk mengecek jika di cart item sudah di add
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId)
            matchingItem = cartItem;
    })

    // jika cartItem sudah berada di cart maka quantity +1
    if (matchingItem) {
        matchingItem.quantity += 1;
        // jika cart kosong maka push productId ke cart
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'

        })
    }
    saveToStorage()
}

export function removeFromCart(productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart; 
    saveToStorage()
}