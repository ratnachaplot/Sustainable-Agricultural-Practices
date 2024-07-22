document.addEventListener('DOMContentLoaded', function () {
    // Learn more button interaction
    document.getElementById('learnMore').addEventListener('click', function () {
        const additionalInfo = document.getElementById('additionalInfo');
        if (additionalInfo.classList.contains('hidden')) {
            additionalInfo.classList.remove('hidden');
        } else {
            additionalInfo.classList.add('hidden');
        }
    });

    

    // Contact form interaction
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formResponse = document.getElementById('formResponse');

        if (name && email && message) {
            formResponse.innerText = "Thank you for your message, " + name + "! We will get back to you soon.";
            formResponse.classList.remove('error');
            formResponse.classList.add('success');
            document.getElementById('contactForm').reset();
        } else {
            formResponse.innerText = "Please fill out all fields.";
            formResponse.classList.remove('success');
            formResponse.classList.add('error');
        }
    });
});


