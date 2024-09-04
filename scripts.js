// Smooth scrolling function
function scrollToSection(id) {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});
