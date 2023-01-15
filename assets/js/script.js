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
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Home Banner Swiper Slide Ends Here
