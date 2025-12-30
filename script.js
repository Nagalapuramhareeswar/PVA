// Mobile Menu Interactivity
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');
const dropbtn = document.getElementById('dropbtn');
const dropdown = document.getElementById('dropdown-content');

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

//disable right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    });


// Handle Form Submission
const form = document.getElementById('regForm');
const submitBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append("access_key","400eaf8d-b70f-4825-9b3d-37ad62b09aa0");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (response.ok) {
            window.location.href = "https://web3forms.com/success";
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Scroll-based Header Styling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#020617'; // Darker on scroll
        nav.style.padding = '0.7rem 5%';
    } else {
        nav.style.background = '#0f172a';
        nav.style.padding = '1rem 5%';
    }
});
