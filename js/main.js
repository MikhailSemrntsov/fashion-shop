$(document).ready(function () {
  var menuButton = document.querySelector(".button__menu");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar").classList.add("navbar__visible");
  });
  // disable scrolling 'body' when the menu is open
  var nonScroll = document.querySelector(".button__menu");
  nonScroll.addEventListener("click", function () {
    document.querySelector("body").classList.add("body-overflow");
  });

  var closeMenuButton = $(".navbar__icon-close");
  closeMenuButton.on("click", closeMenu);

  function closeMenu() {
    var menuClose = $(".navbar");
    menuClose.removeClass("navbar__visible");
  }
  // enable scrolling 'body' when the menu is closed
  var haveScroll = $(".navbar__icon-close");
  haveScroll.on("click", noScroll);
  console.log("клик по кнопке меню");
  function noScroll() {
    var menuClosed = $("body");
    menuClosed.removeClass("body-overflow");
  }

  // tabs

  var tabsCategory = $(".category__text");
  var tabsCards = $(".cards-wrapper");
  var tabsBest = $(".cards-best");
  var tabsSoon = $(".cards-soon");

  tabsCategory.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsCards.removeClass("cards__product-active");
    tabsCategory.removeClass("category__text--active");
    tabsBest.removeClass("cards__product-active");
    tabsSoon.removeClass("cards__product-active");
    $(activeContent).addClass("cards__product-active");
    $(this).addClass("category__text--active");
    event.preventDefault();
  });

  // swiper-slider customs 1

  var customSwiper = new Swiper(".customs-slider", {
    autoplay: {
      delay: 7000,
    },
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });
  // остановка слайдера
  $(".customs-slider").mouseover(function () {
    customSwiper.autoplay.stop();
  });
  $(".customs-slider").mouseout(function () {
    customSwiper.autoplay.start();
  });

  // swiper-slider stories 2

  var storiesSwiper = new Swiper(".stories-slider", {
    // Optional parameters
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: ".slider-button--next",
      prevEl: ".slider-button--prev",
    },
  });

  // Отправка данных на сервер
  function send(event, php) {
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    var req = new XMLHttpRequest();
    req.open("POST", php, true);
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);

        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
        // Если не удалось связаться с php файлом
      } else {
        alert("Ошибка сервера. Номер: " + req.status);
      }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
      alert("Ошибка отправки запроса");
    };
    req.send(new FormData(event.target));
  }
});
