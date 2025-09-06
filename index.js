// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tab functionality
    initTabs();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navbar scroll behavior
    initNavbarScroll();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize dropdown animations
    initDropdownAnimations();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize hover dropdown for desktop
    initHoverDropdown();
});

// Mobile navigation functionality
function initMobileNavigation() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarBackdrop = document.createElement('div');
    
    // Create backdrop element
    navbarBackdrop.className = 'navbar-backdrop';
    document.body.appendChild(navbarBackdrop);
    
    // Toggle mobile menu
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navbarCollapse.classList.toggle('show');
            navbarBackdrop.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });
        
        // Close menu when clicking on backdrop
        navbarBackdrop.addEventListener('click', function() {
            navbarToggler.setAttribute('aria-expanded', 'false');
            navbarCollapse.classList.remove('show');
            navbarBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    navbarToggler.setAttribute('aria-expanded', 'false');
                    navbarCollapse.classList.remove('show');
                    navbarBackdrop.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Handle dropdown toggle on mobile
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    const dropdown = this.closest('.dropdown');
                    dropdown.classList.toggle('show');
                    
                    // Close other dropdowns
                    document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('show');
                        }
                    });
                }
            });
        });
    }
}

// Hover dropdown for desktop
function initHoverDropdown() {
    const dropdownItems = document.querySelectorAll('.dropdown');
    
    dropdownItems.forEach(item => {
        if (window.innerWidth >= 992) {
            // Desktop - hover to open
            item.addEventListener('mouseenter', function() {
                const dropdownMenu = this.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.classList.add('show');
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const dropdownMenu = this.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                }
            });
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close all dropdowns on resize
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    
    // Reinitialize hover functionality
    initHoverDropdown();
});

// Tab functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content section
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar scroll behavior
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!firstName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Dropdown animations
function initDropdownAnimations() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('show.bs.dropdown', function() {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.add('animate__animated', 'animate__fadeIn');
        });
        
        toggle.addEventListener('hide.bs.dropdown', function() {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.remove('animate__animated', 'animate__fadeIn');
            dropdownMenu.classList.add('animate__animated', 'animate__fadeOut');
        });
    });
}

// Add animation classes to elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);