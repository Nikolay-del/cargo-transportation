// const mainNav = document.querySelector('main-nav')
// const toggle = mainNav.querySelector("main-nav__toggle");

// Maps

const center = [59.93863506417266,30.323117499999945];

function init() {
  let map = new ymaps.Map('contacts-map', {
    center: center,
    zoom: 18,
  });

  const placemark = new ymaps.Placemark([59.938628334853206,30.323197966270392], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.svg',
    iconImageSize: [67, 94],
    iconImageOffset: [-67, -94]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark)
}

ymaps.ready(init)
