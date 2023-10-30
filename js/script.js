window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
        menuItems = document.querySelectorAll('.nav-menu__list-item'),
        hamburger = document.querySelector('.hamburger'),
        bodyElement = document.querySelector('body');

    function toggleMenu() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        bodyElement.classList.toggle('overflow-hidden');
    }

    hamburger.addEventListener('click', () => {
        toggleMenu();
    });

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            toggleMenu();
        })
    })

    // Додамо обробник кліку для закриття меню при кліку поза ним
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('nav-menu_active') && event.target !== hamburger && !menu.contains(event.target)) {
            toggleMenu();
        }
    });
})