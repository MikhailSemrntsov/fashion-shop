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
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 7000,
    },
  });

  // swiper-slider stories 2

  var storiesSwiper = new Swiper(".stories-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".slider-button--next",
      prevEl: ".slider-button--prev",
    },
    // autoplay: {
    //   delay: 7000,
    // },
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
