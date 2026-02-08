// var countDown = new Date("Nov 25, 2025 12:22:00").getTime();
// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDown - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days + " : ";
//     document.getElementById("hours").innerHTML = hours + " : ";
//     document.getElementById("minutes").innerHTML = minutes + " : ";
//     document.getElementById("seconds").innerHTML = seconds;

//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("days").innerHTML = "00 :";
//         document.getElementById("hours").innerHTML = "00 :";
//         document.getElementById("minutes").innerHTML = "00 :";
//         document.getElementById("seconds").innerHTML = "00 :";
//     }
// }, 1000);


// ADD TO CART AND NAV BADGE

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


  // nav active
  