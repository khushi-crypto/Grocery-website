// taki search button jo ki chupa hua uski prop vjh se, wo btn clck krne pr ajye(active)
let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');

  
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}

// taki cart item jo ki chupa hua uski prop vjh se, wo btn clck krne pr ajye(active)
let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}

let loginform=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginform.classList.toggle('active');


    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');  /**iska mtlb h harr line m ki jab menu btn active rhe toh or sb gayab ho jaye ek sath na khule */
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');

}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}





var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
   
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
   
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });