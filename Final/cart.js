// cart.js
export function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.cart-total');

    cartContainer.innerHTML = ''; // Clear the cart container before adding items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is currently empty.</p>';
        totalElement.innerHTML = '<p>Total: $0.00</p>';
    } else {
        let total = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(itemElement);

            total += parseFloat(item.price);
        });

        totalElement.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
        
        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removeItemFromCart(index);
            });
        });
    }
}

function removeItemFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Update the cart display
}

document.addEventListener("DOMContentLoaded", updateCart);
