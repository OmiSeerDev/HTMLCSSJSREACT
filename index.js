const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.nav-shopping-cart');
const orderAside = document.querySelector('.order-aside');

toggleDesktopMenu = () => {
desktopMenu.classList.toggle('inactive');
const isAsideClosed = orderAside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive')
    
    if (!isAsideClosed){
    orderAside.classList.add('inactive')
    }
}

toggleMobileMenu = () => {
    const isAsideClosed = orderAside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive')
    
    if (!isAsideClosed){
    orderAside.classList.add('inactive')
    }
}

toggleOrderAside = () => {
    orderAside.classList.toggle('inactive');

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
}

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerIcon.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click', toggleOrderAside);