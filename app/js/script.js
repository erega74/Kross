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