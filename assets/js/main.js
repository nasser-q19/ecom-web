/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart__shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
if(loginClose){
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}



/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true, // Remove quotes around true

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


/*=============== NEW SWIPER ===============*/
/*hna khas bi dik swipper 2 */
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // Remove quotes around true
/*
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },sbar wa7ed chwiya nta  la aslan azadna dik true 9adat lablan m3a responsive*/
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if(window.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}

// Add an event listener for scroll event on the window
window.addEventListener('scroll', scrollUp);


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/


/*===== CART SHOW =====*/
/* Validate if constant exists */


/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/