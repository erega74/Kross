
try {
    var swiper = new Swiper('.home-slider-wrap', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
  });
    var swiper2 = new Swiper('.testimonials-slider-container', {
      pagination: {
        el: '.slider-pagination',
      },
  });
} catch (error) {
  // console.log("слайдер отсутствует")
}



var burgerBtn = document.querySelector(".burger__btn");

var siteNav = document.querySelector(".site-navigation-mobile");


var mobileSocialLi = document.createElement("li");
mobileSocialLi.className = "navigation-item";
try {
  var socials = document.querySelector(".home-socials");
  var mobileSocials = socials.cloneNode(true);
  mobileSocialLi.appendChild(mobileSocials);
} catch (error) {
  
}
  


  

  if (window.matchMedia("(max-width: 830px)").matches) {

    siteNav.appendChild(mobileSocialLi);
    
  }
  window.addEventListener('resize', function(){
    if (window.matchMedia("(max-width: 830px)").matches) {
      siteNav.appendChild(mobileSocialLi);
    }else if (window.matchMedia("(min-width: 831px)").matches && siteNav.querySelector(".navigation-item > .burger-cross__btn")){
      siteNav.removeChild(mobileSocialLi);
    }
  })


  var closeNavBtn = document.querySelector(".close-button")




function openNav() {
  siteNav.classList.add("site-navigation-mobile--active","fade-in-top");
  if(siteNav.classList.contains("fade-out-top")){
    siteNav.classList.remove("fade-out-top");
  }
}

function closeNav() {
  siteNav.classList.add("fade-out-top");
  setTimeout(function(){
    siteNav.classList.remove("site-navigation-mobile--active","fade-in-top", "fade-out-top");
  }, 1000);
}

burgerBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);






