const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.nav-shopping-cart');
const orderAside = document.querySelector('.order-aside');
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-details');
const exitButton = document.querySelector('.product-details-close');


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

openProductDetails =()=> {
    
    productDetails.classList.remove('inactive');
}
closeProductDetail =()=>{
    productDetails.classList.add('inactive');
}

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerIcon.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click', toggleOrderAside);

const productList = [];
productList.push({
    name: "Bike",
    price: 12000.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: "Purse",
    price: 1300.00,
    image: 'https://cdn.cliqueinc.com/posts/292083/affordable-purse-brands-292083-1661443929747-main.700x0c.jpg'
});

productList.push({
    name: "Tablet",
    price: 8550.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2v7EDhpcF5jF8cLoY7M39xQ745ABu-lIpg&usqp=CAU'
});


function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      productImgCart.addEventListener('click', openProductDetails);
      exitButton.addEventListener('click',closeProductDetail);
    
      
      productInfoFigure.appendChild(productImgCart);
      
      
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      
      cardsContainer.appendChild(productCard);
    }
  }

renderProducts(productList);