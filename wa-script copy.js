document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp numbers
    const indianNumber = '919655754744'; // Replace with your Indian number
    const internationalNumber = '601127728901'; // Replace with your international number

    // Function to fetch country from latitude and longitude
    function getCountryFromCoords(latitude, longitude) {
        fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
            .then(response => response.json())
            .then(data => {
                const country = data.prov;

                // Determine the WhatsApp number based on the user's location
                let whatsappNumber;
                if (country === 'IN') {
                    whatsappNumber = indianNumber;
                } else {
                    whatsappNumber = internationalNumber;
                }

                // Update the WhatsApp chat link
                const whatsappButton = document.getElementById('whatsapp-button');
                // whatsappButton.href = `https://wa.me/${whatsappNumber}`;
                whatsappButton.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hello,%20%0A%20I%20have%20a%20a%20a%20question!`;
            })
            .catch(error => console.error('Error fetching country from coordinates:', error));
    }

    // Check if Geolocation API is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getCountryFromCoords(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                // Set default international number if location is not available
                const whatsappButton = document.getElementById('whatsapp-button');
                whatsappButton.href = `https://api.whatsapp.com/send?phone=${internationalNumber}&text=Hello,%20%0A%20I%20have%20a%20a%20a%20question!`;
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Set default international number if Geolocation API is not supported
        const whatsappButton = document.getElementById('whatsapp-button');
        whatsappButton.href = `https://api.whatsapp.com/send?phone=${internationalNumber}&text=Hello,%20%0A%20I%20have%20a%20a%20a%20question!`;
    }
});
