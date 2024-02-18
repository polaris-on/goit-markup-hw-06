const openMenu = document.querySelector('.header-menu-button');
const closeMenu = document.querySelector('.menu-button-close');
const headerNav = document.querySelector('.header-nav');

openMenu.addEventListener('click', () => {
    headerNav.classList.add('is-open');
})

closeMenu.addEventListener('click', () => {
    headerNav.classList.remove('is-open');
})


const orderButton = document.querySelector('.hero-button'),
    modal = document.querySelector('.backdrop'),
    modalCloseButton = document.querySelector('.modal-button-close');

orderButton.addEventListener('click', () => {
    modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('is-open');
});