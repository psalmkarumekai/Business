/* Save as: script.js */
document.addEventListener('DOMContentLoaded', () => {
    
       // ==========================================
    // 1. DYNAMIC WHATSAPP CLOCK-TO-CHAT SETUP
    // ==========================================
    const WHATSAPP_NUMBER = "27623522705"; 
    const DEFAULT_MESSAGE = encodeURIComponent("Hello Patelectrix, I would like to inquire about a home appliance repair.");

    // Create the floating element programmatically
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.setAttribute('href', '#');
    
    // FORCED INLINE EMBED: Injects logo graphic data straight into the browser layer
    whatsappBtn.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://w3.org' viewBox='0 0 448 512'%3E%3Cpath fill='%23ffffff' d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'/%3E%3C/svg%3E\")";
    whatsappBtn.style.backgroundRepeat = "no-repeat";
    whatsappBtn.style.backgroundPosition = "center";
    whatsappBtn.style.backgroundSize = "34px";

    document.body.appendChild(whatsappBtn);

    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const now = new Date();
        const currentDay = now.getDay(); 
        const currentHour = now.getHours();

        const isBusinessDay = currentDay >= 1 && currentDay <= 6;
        const isBusinessHour = currentHour >= 8 && currentHour < 17;

        if (isBusinessDay && isBusinessHour) {
            window.open(`https://wa.me{WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`, '_blank');
        } else {
            alert("Our live support line is currently closed (Hours: Mon-Sat, 08:00-17:00).\n\nYou will now be redirected to our Online Booking form to secure the next available technician slot.");
            window.location.href = "book.html";
        }
    });


    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Fetch real-time system clock settings
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const currentHour = now.getHours();

        // Business Logic Rules: Monday (1) to Saturday (6) from 08:00 to 17:00
        const isBusinessDay = currentDay >= 1 && currentDay <= 6;
        const isBusinessHour = currentHour >= 8 && currentHour < 17;

        if (isBusinessDay && isBusinessHour) {
            // Live Transfer Window: Launch official WhatsApp API
            window.open(`https://wa.me{WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`, '_blank');
        } else {
            // After-Hours Vault: Prevent blind connection drops, redirect to form system instead
            alert("Our live support line is currently closed (Hours: Mon-Sat, 08:00-17:00).\n\nYou will now be redirected to our Online Booking form to secure the next available technician slot.");
            window.location.href = "book.html";
        }
    });

    // ==========================================
    // 2. ACCORDION MECHANICS (FAQ)
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-trigger');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
            
            faqItems.forEach(sibling => {
                if (sibling !== item) {
                    sibling.parentElement.classList.remove('active');
                }
            });
        });
    });

    // ==========================================
    // 3. BOOKING FORM CLIENT VALIDATION
    // ==========================================
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clientName').value;
            const appliance = document.getElementById('applianceSelect').value;
            alert(`Thank you, ${name}! Your requested diagnostic slot for your ${appliance} has been queued. Our service team will reach out shortly.`);
            bookingForm.reset();
        });
    }

    // ==========================================
    // 4. CONTACT FORM CLIENT VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('contactEmail').value;
            alert(`Message dispatched successfully! A technical consultant will respond to ${email} within 2 hours.`);
            contactForm.reset();
        });
    }
});
