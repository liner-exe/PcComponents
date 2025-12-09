document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const successMessage = document.getElementById('form-success');
    const submitButton = form.querySelector('.button');

    submitButton.textContent = 'Отправка...';
    submitButton.disabled = true;

    setTimeout(() => {
        form.reset();
        successMessage.style.display = 'block';

        submitButton.textContent = 'Отправить сообщение';
        submitButton.disabled = false;

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';

    }, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');
    const body = document.body;

    if (burger) {
        burger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        body.addEventListener('click', function(e) {
            if (body.classList.contains('menu-open') &&
                !nav.contains(e.target) &&
                !burger.contains(e.target)) {
                burger.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});