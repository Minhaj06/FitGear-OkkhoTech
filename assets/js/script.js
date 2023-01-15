$(document).ready(function () {
  // Toggle Sidebar
  $(".menu-icon").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });

  $(".body-wrapper-freeze").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });

  // Toggle Cart Sider
  $(".cart-sider-toggler").click(function () {
    $(".cart-sider").toggleClass("show-cart-sider");
    $(".sider-body-wrapper-freeze").toggleClass("d-block");
  });

  $(".sider-body-wrapper-freeze").click(function () {
    $(".cart-sider").toggleClass("show-cart-sider");
    $(".sider-body-wrapper-freeze").toggleClass("d-block");
  });
});

// Home Banner Swiper Slide Starts Here
var swiper = new Swiper(".home-banner-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-banner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".home-banner .swiper-button-next",
    prevEl: ".home-banner .swiper-button-prev",
  },
});
// Home Banner Swiper Slide Ends Here

// Single Product Page Swiper Slider
var swiper = new Swiper(".single-product-slider .mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".single-product-slider .mySwiper2", {
  loop: false,
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});
