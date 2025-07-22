const menu = document.querySelector('button.menu');

menu.addEventListener('click', function(e) {
    const navLinks = document.querySelector('nav');
    navLinks.classList.toggle('visible');

    if (navLinks.classList.contains('visible')) {
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
})