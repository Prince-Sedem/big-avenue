document.addEventListener('DOMContentLoaded', function() {
    // Select all buy buttons with the class 'whatsapp-link'
    const buyButtons = document.querySelectorAll('.whatsapp-link');
    
    // Loop through each button and add event listeners
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get product name and price from data attributes
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            
            // Construct the WhatsApp link
            const phoneNumber = "233500680062";  // Your WhatsApp number
            const message = `Hi, I'm interested in buying the ${productName} for ${productPrice}.`;
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Redirect to WhatsApp
            window.open(whatsappLink, '_blank');
        });
    });
});
