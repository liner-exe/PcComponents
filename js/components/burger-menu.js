export function burgerMenu() {
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
}