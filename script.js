ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [41.357375, 36.209903],
            zoom: 6
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Setting an option to make placemarks start clusterizing.
            clusterize: true,
            // ObjectManager accepts the same options as the clusterer.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);
    objectManager.add('{"type":"FeatureCollection","features":[{"type":"Feature","id":0,"geometry":{"type":"Point","coordinates":[41.357375,36.209903]},"properties":{"balloonContent":"<p><b>Adı : </b> Samsun</p> <p><b>Bölge : </b> Karadeniz bölgesi</p>  <p><b>Nüfus : </b> 1,335,716</p> <p><b>Rakım : </b> 20m</p> <p><b>Plaka kodu : </b> 55</p>"}},{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[41.017099,29.046817]},"properties":{"balloonContent":"<p><b>Adı : </b> İstanbul</p> <p><b>Bölge : </b> Marmara bölgesi</p>  <p><b>Nüfus : </b> 15,067,724</p> <p><b>Rakım : </b> 537m</p> <p><b>Plaka kodu : </b> 34</p>"}},{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[39.960241,32.914005]},"properties":{"balloonContent":"<p><b>Adı : </b> Ankara</p> <p><b>Bölge : </b> İç Anadolu bölgesi</p>  <p><b>Nüfus : </b> 5,503,985</p> <p><b>Rakım : </b> 938m</p> <p><b>Plaka kodu : </b> 06</p>"}}]}')
}
