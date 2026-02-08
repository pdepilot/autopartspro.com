
document.addEventListener('DOMContentLoaded', function () {
    // Payment tab switching
    const paymentTabs = document.querySelectorAll('.payment-tab');
    const paymentContents = document.querySelectorAll('.payment-content');

    paymentTabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            paymentTabs.forEach(t => t.classList.remove('active'));
            paymentContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            paymentContents[index].classList.add('active');
        });
    });

    // Quantity buttons
    const quantityBtns = document.querySelectorAll('.quantity-btn');

    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);

            if (this.textContent === '+') {
                value++;
            } else {
                value = Math.max(1, value - 1);
            }

            input.value = value;
            // In a real implementation, you'd update the cart total here
        });
    });
});


// navactive
