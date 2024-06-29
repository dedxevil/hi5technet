document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp numbers
    const indianNumber = '919655754744';
    const internationalNumber = '601127728901';

    // Elements
    const whatsappLabel = document.getElementById('whatsapp-label');
    const whatsappOptions = document.getElementById('whatsapp-options');
    const indiaButton = document.getElementById('india-button');
    const outsideIndiaButton = document.getElementById('outside-india-button');

    // Toggle visibility of options
    whatsappLabel.addEventListener('click', () => {
        whatsappOptions.classList.toggle('visible');
    });

    // Handle button clicks
    indiaButton.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?phone=${indianNumber}&text=Hello,%20%0A%20I%20have%20a%20a%20a%20question!`, '_blank');
    });

    outsideIndiaButton.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?phone=${internationalNumber}&text=Hello,%20%0A%20I%20have%20a%20a%20a%20question!`, '_blank');
    });
});
