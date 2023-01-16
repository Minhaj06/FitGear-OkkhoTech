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
var swiper3 = new Swiper(".single-product-slider .mySwiper3", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper4 = new Swiper(".single-product-slider .mySwiper2", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper3,
  },
});

// Image Zoom
$(document).ready(function () {
  $(".zoom").mousemove(function (e) {
    zoom(e);
  });

  function zoom(e) {
    var x, y;
    var zoomer = e.currentTarget;
    if (e.offsetX) {
      offsetX = e.offsetX;
    } else {
      offsetX = e.touches[0].pageX;
    }

    if (e.offsetY) {
      offsetY = e.offsetY;
    } else {
      offsetX = e.touches[0].pageX;
    }
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
  }
});

// Number Increase Decrese
function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
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

// Recently Viewed Products Slider
const popularProductSwiper = new Swiper(".recently-viewed-product-swiper", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
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
