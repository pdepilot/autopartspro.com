document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart count
  let cartCount = 0;
  const cartBadge = document.querySelector('.cart-badge');
  
  // Get all add to cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  // Add click event to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Increment cart count
      cartCount++;
      
      // Update badge
      cartBadge.textContent = cartCount;
      
      // Optional: Add animation
      cartBadge.style.transform = 'scale(1.2)';
      setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
      }, 300);
      
      // Here you would typically also add the item to a cart array
      // For a more complete solution, you might want to track which items are added
    });
  });
});

