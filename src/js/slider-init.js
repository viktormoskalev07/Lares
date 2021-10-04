if (document.querySelector('.HomepageSwiperInit')){
  var swiperHomapage = new Swiper(".HomepageSwiperInit", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      grabCursor:'true',
      pagination: {
        el: ".section-slider__pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4, 
          spaceBetween: 40,
        },
      },
  });
}

if (document.querySelector('.CategoriesSwiperInit')){
  var swiperHomapage = new Swiper(".CategoriesSwiperInit", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      grabCursor:'true',
      pagination: {
        el: ".section-slider__pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
  });
}