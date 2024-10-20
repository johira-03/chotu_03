let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    totalPrice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = ${item.name} - $${item.price};
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some items.");
        return;
        alert("Thank you for your order! Your total is $" + totalPrice);
    cart = [];
    updateCart();
};


document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    const feedbackMessage = document.createElement('div');
    feedbackMessage.textContent = ${name}: ${feedback};
    document.getElementById('feedback-messages').appendChild(feedbackMessage);

    document.getElementById('feedback-form').reset();
    alert("Thank you for your feedback!");
});

