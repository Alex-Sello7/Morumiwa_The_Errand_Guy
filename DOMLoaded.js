        document.addEventListener('DOMContentLoaded', function () {
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
            }
        });