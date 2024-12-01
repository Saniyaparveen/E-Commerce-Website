// Function to navigate to the products page and set the category
function navigateToCategory(category) {
  // Store the category in localStorage to use on the products page
  localStorage.setItem('category', category);
  
  // Redirect to the products page
  window.location.href = 'products.html';
}
