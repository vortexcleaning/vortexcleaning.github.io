// script.js
document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.querySelector(".services-link");

    // Function to check if the screen is mobile
    function isMobile() {
        return window.innerWidth <= 768; // Adjust breakpoint as needed
    }

    // Disable Services link on mobile
    if (isMobile()) {
        servicesLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior on mobile
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach(review => review.classList.remove('active'));
        reviews[index].classList.add('active');
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    }

    nextBtn.addEventListener('click', nextReview);
    prevBtn.addEventListener('click', prevReview);
    
    // Auto-rotate every 5 seconds (optional)
    setInterval(nextReview, 5000);
    
    // Show first review initially
    showReview(currentIndex);
});