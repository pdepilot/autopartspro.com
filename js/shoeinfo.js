// navbar
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('search-container').classList.toggle('active');
    document.getElementById('nav-icons').classList.toggle('active');
});




// Simple functionality for the product page
document.addEventListener('DOMContentLoaded', function () {
    // Thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            mainImage.src = this.src;
        });
    });

    // Color swatch selection
    const colorSwatches = document.querySelectorAll('.color-swatch');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            colorSwatches.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Tab switching
    const tabs = document.querySelectorAll('.details-tab');
    const contents = document.querySelector('.details-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, you'd switch content here
        });
    });
});


// add to cart
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




