var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});
type="text/javascript">
    ymaps.ready(init);
    function init(){
        var Map = new ymaps.Map("map", {
            center: [7.890759, 98.294690],
            zoom: 17
        });
        var Mark = new ymaps.Placemark(
        [7.890759, 98.294690],
        );
        Map.geoObjects.add(Mark);
    };