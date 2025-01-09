// Initialize AOS (animations on scroll)
AOS.init({
    duration: 1000, // duration of animation
    easing: 'ease-in-out',
});

// Mobile Menu Toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});