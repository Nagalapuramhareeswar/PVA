// Mobile Menu Interactivity
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon to 'X' when menu is open
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Handle Form Submission
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    alert('Application Received! We will review your skill level and contact you via email.');
    this.reset();
});

// Scroll-based Header Styling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#020617'; // Darker on scroll
        nav.style.padding = '1rem 5%';
    } else {
        nav.style.background = '#0f172a';
        nav.style.padding = '1rem 5%';
    }
});