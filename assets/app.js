var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});