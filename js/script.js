window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItems = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger'),
    bodyElement = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        bodyElement.classList.toggle('overflow-hidden');
    });

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
            bodyElement.classList.toggle('overflow-hidden');
        })
    })
})