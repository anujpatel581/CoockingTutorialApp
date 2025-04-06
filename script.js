// A simple script to handle form submission or other functionality.
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
