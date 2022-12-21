const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.nav-shopping-cart');
const orderAside = document.querySelector('.order-aside');
const cardsContainer = document.querySelector('.cards-container')
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

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Purse",
    price: 13,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Tablet",
    price: 1250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*

          <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div>

        </div> */
for (product of productList) {
   
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productCard.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = `$ ${product.price}`;
    
    const productInfoName = document.createElement('p');
    productInfoName.innerText = `${product.name}`;

    const productFigure = document.createElement('figure');
    const productCart = document.createElement('img');
    productCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
   
    productFigure.appendChild(productCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
  
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
}