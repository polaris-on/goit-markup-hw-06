const openMenu = document.querySelector('.header-menu-button');
const closeMenu = document.querySelector('.menu-button-close');
const headerNav = document.querySelector('.header-nav');

openMenu.addEventListener('click', () => {
    headerNav.classList.add('is-open');
})

closeMenu.addEventListener('click', () => {
    headerNav.classList.remove('is-open');
})