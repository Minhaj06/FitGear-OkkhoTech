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

// Password Show Hide
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");

const passIcon = document.querySelector(".pass-icon");
const cPassIcon = document.querySelector(".c-pass-icon");

function showHidePass(selector, icon) {
  if (selector.type === "password") {
    selector.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    selector.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Home Banner Swiper Slide Starts Here
const swiper = new Swiper(".home-banner-swiper", {
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

// Single Product Quick View Slider
const swiper1 = new Swiper(".single-product-slider .mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".single-product-slider .mySwiper2", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper1,
  },
});
const swiper3 = new Swiper(".single-product-slider .mySwiper3", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper4 = new Swiper(".single-product-slider .mySwiper2", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper3,
  },
});

// Single Product Details Slider
const swiper5 = new Swiper(".single-product-slider-main .mySwiper4", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper6 = new Swiper(".single-product-slider-main .mySwiper5", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper5,
  },
});
const swiper7 = new Swiper(".single-product-slider-main .mySwiper6", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper8 = new Swiper(".single-product-slider-main .mySwiper5", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper7,
  },
});

// Recently Viewed Products Slider
const popularProductSwiper = new Swiper(".recently-viewed-product-swiper", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    330: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".recently-viewed-product-swiper .swiper-button-next",
    prevEl: ".recently-viewed-product-swiper .swiper-button-prev",
  },
});

// Number Increase Decrese
function increaseValue(selector) {
  var value = parseInt(document.getElementById(selector).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(selector).value = value;
}

function decreaseValue(selector) {
  var value = parseInt(document.getElementById(selector).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById(selector).value = value;
}

// Grid & List View
const listViewButton = document.querySelector(".list-view-button");
const gridViewButton = document.querySelector(".grid-view-button");
const list = document.getElementById("listView");

listViewButton.onclick = function () {
  gridViewButton.classList.remove("bg-white");
  listViewButton.classList.add("bg-white");

  list.classList.remove("grid-view-filter");
  list.classList.add("list-view-filter");
};

gridViewButton.onclick = function () {
  listViewButton.classList.remove("bg-white");
  gridViewButton.classList.add("bg-white");

  list.classList.remove("list-view-filter");
  list.classList.add("grid-view-filter");
};
