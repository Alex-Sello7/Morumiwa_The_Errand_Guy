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
        
        // Header scroll effect
        const header = document.getElementById('header');
        const headerTexts = document.querySelectorAll('.header-text');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                headerTexts.forEach(text => {
                    text.classList.remove('text-white');
                    text.classList.add('text-primary');
                });
            } else {
                header.classList.remove('scrolled');
                headerTexts.forEach(text => {
                    text.classList.remove('text-primary');
                    text.classList.add('text-white');
                });
            }
        });
        
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill all fields');
                return;
            }
            
            // Show success message (in a real app, this would be connected to an API)
            alert('Thank you for your message! This is a prototype. In the full version, your message would be sent to our team.');
            
            // Reset form
            contactForm.reset();
        });