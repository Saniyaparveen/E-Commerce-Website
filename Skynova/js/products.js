document.addEventListener('DOMContentLoaded', function () {
  // Retrieve category from localStorage
  const category = localStorage.getItem('category');
  const productList = document.getElementById('product-list');

  // Example products data (already provided in your code)
  const products = {
    skincare: [
      { name: 'Moisturizer', price: 100, image: 'images/skincare/moisturizer.jpg' },
      { name: 'Cleanser', price: 150, image: 'images/skincare/cleanser.jpg' },
      { name: 'Toner', price: 180, image: 'images/skincare/toner.jpg' },
      { name: 'Sunscreen', price: 150, image: 'images/skincare/sunscreen.jpg' },
      { name: 'Serum', price: 300, image: 'images/skincare/serum.jpg' },
      { name: 'Lotion', price: 180, image: 'images/skincare/lotion.jpg' },
      { name: 'Vitamin C', price: 180, image: 'images/skincare/vitaminc.jpg' },
      { name: 'Alovera Gell', price: 180, image: 'images/skincare/alovera.jpg' },
      { name: 'Raice Facial Kit', price: 180, image: 'images/skincare/kit.jpg' },
      { name: 'Niacinamide', price: 270, image: 'images/skincare/niacinamide.jpg' }
    ],
    makeup: [
      { name: 'Lipstick', price: 180, image: 'images/makeup/lipstick.jpg' },
      { name: 'Primer', price: 200, image: 'images/makeup/primer.jpg' },
      { name: 'Foundation', price: 250, image: 'images/makeup/foundation.jpg' },
      { name: 'Eyeliner', price: 150, image: 'images/makeup/eyeliner.jpg' },
      { name: 'Bronzer', price: 220, image: 'images/makeup/bronzer.jpg' },
      { name: 'Eyeshadow', price: 180, image: 'images/makeup/eyeshadow.jpg' },
      { name: 'Lipgloss', price: 14, image: 'images/makeup/lipgloss.jpg' },
      { name: 'Lotion', price: 180, image: 'images/makeup/lotion.jpg' },
      { name: 'Lipliner', price: 120, image: 'images/makeup/lipliner.jpg' },
      { name: 'Hand Cream', price: 160, image: 'images/makeup/hand-cream.jpg' },
      { name: 'Face Powder', price: 200, image: 'images/makeup/face-powder.jpg' },
      { name: 'Tanning Lotion', price: 250, image: 'images/makeup/tanning-lotion.jpg' },
      { name: 'Facial Spray', price: 180, image: 'images/makeup/facial-spray.jpg' },
      { name: 'Lip Pencil', price: 140, image: 'images/makeup/lip-pencil.jpg' }
    ],
    fragrence: [
      { name: 'Perfume', price: 300, image: 'images/fragrence/perfume.jpg' },
      { name: 'Body Spray', price: 120, image: 'images/fragrence/body-spray.jpg' },
      { name: "Rose Perfume", price: 49.99, image: "images/fragrence/rose-perfume.jpg" },
      { name: "Lavender Perfume", price: 45.99, image: "images/fragrence/lavender-perfume.jpg" },
      { name: "Citrus Perfume", price: 39.99, image: "images/fragrence/citrus-perfume.jpg" },
      { name: "Vanilla Perfume", price: 52.99, image: "images/fragrence/vanilla-perfume.jpg" }
    ],
    haircare: [
      { name: 'Shampoo', price: 100, image: 'images/haircare/shampoo.jpg' },
      { name: 'Hair Serum', price: 220, image: 'images/haircare/hair-serum.jpg' },
      { name: 'Hair Cream', price: 180, image: 'images/haircare/hair-cream.jpg' },
      { name: 'Conditioner', price: 120, image: 'images/haircare/conditioner.jpg' },
      { name: 'Heat Protector', price: 2000, image: 'images/haircare/heat-protector.jpg' },
      { name: 'Volumizer', price: 2500, image: 'images/haircare/volumizer.jpg' },
      { name: 'Anti Frizz', price: 190, image: 'images/haircare/anti-frizz.jpg' },
      { name: 'Hair Brush', price: 15, image: 'images/haircare/hair-brush.jpg' },
      { name: 'Blow Dryer', price: 5000, image: 'images/haircare/blow-dryer.jpg' },
      { name: 'Hair Ties', price: 5, image: 'images/haircare/hair-ties.jpg' },
      { name: 'Hair Towel', price: 12, image: 'images/haircare/hair-towel.jpg' },
      { name: 'Curling Iron', price: 3500, image: 'images/haircare/curling-iron.jpg' },
      { name: 'Straightener', price: 2800, image: 'images/haircare/strengthener.jpg' }
    ]
  };

  // Get the products for the selected category
  const categoryProducts = products[category] || [];

  // Dynamically render the product cards
  categoryProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
  });
});

// Add to Cart function
function addToCart(productName, productPrice) {
  // Retrieve the cart from localStorage or initialize it
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity
  } else {
      // Add a new product to the cart
      cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  console.log("Cart after addition:", cart);  // Debugging line to check cart updates
  alert(`${productName} added to cart!`);
}
