const COORDINATES = [59.938631, 30.323037];
const ZOOM = 16;

export const getMap = () => {
  const yandexMap = window.ymaps;

  if (document.getElementById('map')) {
    yandexMap.ready(function () {
      let myMap = new yandexMap.Map('map', {
        center: COORDINATES,
        zoom: ZOOM,
      }, {
        searchControlProvider: 'yandex#search',
      });

      let pin = new yandexMap.Placemark(COORDINATES, {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/sprite/map-pin.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-9, -22],
      });

      myMap.geoObjects
          .add(pin);
    });
  }
};
