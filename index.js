document.addEventListener('DOMContentLoaded', function() {
    // Splash screen functionality
    setTimeout(function() {
        document.getElementById('splash').style.animation = 'fadeOut 1s ease forwards';
        setTimeout(function() {
            document.getElementById('splash').style.display = 'none';
        }, 1000);
    }, 3000);

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.service || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Show message function
    function showMessage(message, type) {
        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = message;
        messageBox.className = 'message-box show';
        
        if (type === 'success') {
            messageBox.style.backgroundColor = '#4CAF50';
        } else if (type === 'error') {
            messageBox.style.backgroundColor = '#F44336';
        }
        
        setTimeout(function() {
            messageBox.className = 'message-box';
        }, 3000);
    }
    
    // Mobile menu toggle for Bootstrap
    const mobileMenuBtn = document.querySelector('.navbar-toggler');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            const menu = document.querySelector(target);
            menu.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Initialize Bootstrap carousel with custom interval
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }
    
    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    document.querySelectorAll('.service-preview-card, .about-content, .testimonial-slide').forEach(el => {
        observer.observe(el);
    });
});