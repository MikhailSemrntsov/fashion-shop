$(document).ready(function () {
  var menuButton = document.querySelector(".button__menu");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке меню");
    document.querySelector(".navbar").classList.toggle("navbar__visible");
  });

  var closeMenuButton = $(".navbar__icon-close");
  closeMenuButton.on("click", closeMenu);

  function closeMenu() {
    var menuClose = $(".navbar");
    menuClose.removeClass("navbar__visible");
  }

  // tabs

  var tabsCategory = $(".category__text");
  var tabsCards = $(".cards__product");

  tabsCategory.on("click", function (event) {
    event.preventDefault();
    var activeContent = $(this).attr("data-target");
    tabsCards.removeClass("cards__product--active");
    tabsCategory.removeClass("category__text--active");
    $(activeContent).addClass("cards__product--active");
    $(this).addClass("category__text--active");
  });

  // swiper-slider customs

  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // autoplay: {
    //   delay: 2000,
    // },
  });

  // swiper-slider stories
  var mySwiper = new Swiper("stories__swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
