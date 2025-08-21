// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-white', 'shadow-lg');
        navbar.classList.add('bg-transparent');
    }
});

// Pricing Toggle
const pricingToggle = document.getElementById('pricing-toggle');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

pricingToggle.addEventListener('change', () => {
    if (pricingToggle.checked) {
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
    } else {
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
    }
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        content.classList.toggle('open');
        
        if (content.classList.contains('open')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const slider = document.getElementById('testimonial-slider');
const totalSlides = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('next-testimonial').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prev-testimonial').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

// Auto slide testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 5000);

// How It Works Steps
const steps = document.querySelectorAll('.step-active, .step-inactive');

steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        steps.forEach(s => {
            s.classList.remove('step-active');
            s.classList.add('step-inactive');
        });
        step.classList.remove('step-inactive');
        step.classList.add('step-active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Form validation (for future contact forms)
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('email')) {
        errors.push('Email is required');
    }
    
    if (!formData.get('name')) {
        errors.push('Name is required');
    }
    
    return errors;
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
});

// Error handling for external resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://placehold.co/400x300/e5e7eb/9ca3af?text=Image+Not+Found';
    }
});

// Console log for development
console.log('NexaFlow website loaded successfully!');
