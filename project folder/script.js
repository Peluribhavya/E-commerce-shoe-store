let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, price) {
    cartItems.push(itemName);
    cartTotal += price;

    updateCartUI();
}


function updateCartUI(){
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

 cartItemsList.innerHTML = '';
 cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    cartItemsList.appendChild(listItem);
 });
  cartTotalSpan.innerText = cartTotal;
}
