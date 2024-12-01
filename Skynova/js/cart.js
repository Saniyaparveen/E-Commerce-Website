function updateCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');

  // Clear the previous cart display
  cartItems.innerHTML = '';

  // Render each item in the cart
  cart.forEach(item => {
      const cartRow = document.createElement('tr');
      cartRow.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>${item.quantity}</td>
      `;
      cartItems.appendChild(cartRow);
  });

  // Calculate and display total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalPrice.innerText = total.toFixed(2);
}

// Initialize the cart on page load
document.addEventListener('DOMContentLoaded', updateCart);

