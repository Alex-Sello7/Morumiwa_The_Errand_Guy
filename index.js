 /* SPLASH SCREEN */
window.addEventListener("load", () => {
    // Set cursor to wait for the entire page during splash
    document.body.style.cursor = 'wait';
    
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.animation = "fadeOut 1s forwards";
        
        // Immediately restore default cursor when splash starts fading
        document.body.style.cursor = 'default';
        
        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);
    }, 3000); 
});

        // Initialize AOS animation library
        AOS.init({
            once: true,
            duration: 1000,
            offset: 100,
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
                }
            });
        });

                    // Interactive tabs for services section
            const tabButtons = document.querySelectorAll('.tab-button');
            const contentSections = document.querySelectorAll('.content-section');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const tabId = button.dataset.tab;
                    contentSections.forEach(section => {
                        if (section.id === tabId) {
                            section.classList.add('active');
                        } else {
                            section.classList.remove('active');
                        }
                    });
                });
            });

             // Animate number stats on scroll
            function animateStat(element, target, duration) {
                let start = 0;
                const stepTime = Math.abs(Math.floor(duration / target));
                const timer = setInterval(() => {
                    start += 1;
                    element.textContent = start;
                    if (start === target) {
                        clearInterval(timer);
                    }
                }, stepTime);
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const adminStat = document.getElementById('admin-stat');
                        const runnerStat = document.getElementById('runner-stat');
                        
                        animateStat(adminStat, 2, 1000);
                        animateStat(runnerStat, 4, 1000);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const operationalSection = document.getElementById('operational-plan');
            if(operationalSection){
                observer.observe(operationalSection);
            }

            // Animated icon effects
function initAnimatedIcons() {
    // Replace text-based icons with Font Awesome animated icons
    const iconReplacements = {
        '&#128100;': '<i class="fas fa-users fa-beat-fade" style="color: #2563EB;"></i>',
        '&#128187;': '<i class="fas fa-briefcase fa-shake" style="color: #2563EB;"></i>',
        '&#128214;': '<i class="fas fa-hospital fa-bounce" style="color: #2563EB;"></i>',
        '&#x1F4B8;': '<i class="fas fa-shopping-cart fa-beat" style="color: #2563EB;"></i>',
        '&#x1F4BC;': '<i class="fas fa-briefcase fa-beat" style="color: #2563EB;"></i>',
        '&#x1F3E5;': '<i class="fas fa-hospital-alt fa-beat" style="color: #2563EB;"></i>',
        '&#128757;': '<i class="fas fa-motorcycle fa-beat-fade" style="color: #2563EB;"></i>',
        '&#128663;': '<i class="fas fa-car fa-beat-fade" style="color: #2563EB;"></i>',
        '&#10133;': '<i class="fas fa-plus fa-fade" style="color: #D97706;"></i>',
        '&#10003;': '<i class="fas fa-check fa-beat" style="color: #D97706;"></i>'
    };
    
    // Replace all text icons with animated Font Awesome icons
    document.querySelectorAll('*').forEach(element => {
        if (element.innerHTML) {
            let newHtml = element.innerHTML;
            for (const [key, value] of Object.entries(iconReplacements)) {
                newHtml = newHtml.replace(new RegExp(key, 'g'), value);
            }
            element.innerHTML = newHtml;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code here...
    
    // Add animated icons
    initAnimatedIcons();
    
    // Add hover effects to all icons
    document.querySelectorAll('.fa-beat, .fa-beat-fade, .fa-bounce, .fa-fade, .fa-shake').forEach(icon => {
        icon.style.transition = 'all 0.3s ease';
        icon.parentElement.style.cursor = 'pointer';
        
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
        
        // Form validation
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                let isValid = true;
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const messageInput = document.getElementById('message');
                
                // Simple validation
                if (!nameInput.value.trim()) {
                    nameInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    nameInput.classList.remove('is-invalid');
                }
                
                if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
                    emailInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    emailInput.classList.remove('is-invalid');
                }
                
                if (!messageInput.value.trim()) {
                    messageInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    messageInput.classList.remove('is-invalid');
                }
                
                if (isValid) {
                    // For prototype, just reset the form
                    alert('This is a prototype. In the full version, your message would be sent.');
                    contactForm.reset();
                }
            });
        }
        
        // Email validation helper
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        // Auto carousel for testimonials
        const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
            interval: 5000,
            wrap: true
        });
 // Form submission logic for booking
            const bookingForm = document.getElementById('booking-form');
            const messageBox = document.getElementById('message-box');

            if (bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Simple validation check
                    const fullName = document.getElementById('full_name').value;
                    const contact = document.getElementById('contact').value;
                    const description = document.getElementById('description').value;

                    if (!fullName || !contact || !description) {
                        messageBox.textContent = "Please fill in all required fields.";
                        messageBox.style.backgroundColor = '#d9534f'; // red for error
                        messageBox.classList.add('show');
                        setTimeout(() => messageBox.classList.remove('show'), 3000);
                        return;
                    }

                    // Simulate form submission
                    console.log('Form submitted successfully!');
                    
                    // Display success message
                    messageBox.textContent = "Your request has been submitted! We'll be in touch shortly.";
                    messageBox.style.backgroundColor = '#4CAF50'; // green for success
                    messageBox.classList.add('show');
                    
                    // Clear the form fields
                    bookingForm.reset();

                    // Hide the message box after 3 seconds
                    setTimeout(() => messageBox.classList.remove('show'), 3000);
                });
            };