$(document).ready(function(){
var menuButton = document.querySelector(".button__menu");
menuButton.addEventListener("click", function (){
  console.log("клик по кнопке меню");
  document
  .querySelector(".navbar")
  .classList.toggle("navbar__visible");
});

var closeMenuButton = $(".navbar__icon-close");
closeMenuButton.on("click", closeMenu);

function closeMenu(){
  var menuClose = $(".navbar");
  menuClose.removeClass("navbar__visible");
}
});