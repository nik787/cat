ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
          center: [59.938872, 30.322617],
          zoom: 18,
          controls: [],
          type: "yandex#map",

      }, {
          searchControlProvider: "yandex#search"
      },
      {
        suppressMapOpenBlock: true,
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          `<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>`
      ),

      myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
          hintContent: `191186, Санкт-Петербург,
          ул. Б. Конюшенная, д. 19/8`
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-pin.png",
          // Размеры метки.
          iconImageSize: [124, 106],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-50, -200]
      })
      myMap.behaviors
      .disable(["rightMouseButtonMagnifier", "scrollZoom"])
  myMap.geoObjects
      .add(myPlacemark)
});
window.addEventListener("DOMContentLoaded", function() {
  var burger = document.querySelector(".nav__burger");
  var menu = document.querySelector(".nav__list");
  burger.classList.remove("burger--nojs");
  menu.classList.remove("nav__list--open");

  burger.addEventListener("click", openNavigationList);

  function openNavigationList(e) {
    e.preventDefault();
    burger.classList.toggle("burger--close");
    menu.classList.toggle("nav__list--open");
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 27) {
        openNavigationList(e);
      }
    });
  }
});
