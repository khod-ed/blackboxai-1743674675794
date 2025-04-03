// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center';

// Add mobile menu items
const menuItems = [
    { text: 'Model S', href: '#models' },
    { text: 'Model 3', href: '#models' },
    { text: 'Model X', href: '#models' },
    { text: 'Model Y', href: '#models' },
    { text: 'Solar Roof', href: '#solar' },
    { text: 'Solar Panels', href: '#solar' },
    { text: 'Shop', href: '#' },
    { text: 'Account', href: '#' }
];

menuItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    link.className = 'text-white text-2xl my-4';
    mobileMenu.appendChild(link);
});

// Close button for mobile menu
const closeButton = document.createElement('button');
closeButton.innerHTML = '<i class="fas fa-times text-2xl text-white absolute top-8 right-8"></i>';
closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});
mobileMenu.appendChild(closeButton);

// Add mobile menu to body
document.body.appendChild(mobileMenu);

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Video controls for hero section
const heroVideo = document.querySelector('.hero-video');
heroVideo.addEventListener('click', () => {
    if (heroVideo.paused) {
        heroVideo.play();
    } else {
        heroVideo.pause();
    }
});