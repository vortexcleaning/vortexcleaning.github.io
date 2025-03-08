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