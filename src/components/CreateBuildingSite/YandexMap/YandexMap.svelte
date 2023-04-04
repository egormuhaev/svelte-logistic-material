<svelte:head>
    <title>Map example</title>
    <script src='https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=71593fe8-b06e-4225-b546-a96546161871'
            type="text/javascript" on:load={() => ymaps.ready(loadMap)} />
</svelte:head>

<script>
    export let locations = [{
        latitude: 55.75361503443606,
        longitude: 37.620883000000006,
        name: 'Строительная площадка'
    }];

    export let center = [55.75361503443606, 37.620883000000006];
    export let zoom = 15;  


    export var Loaded = false;

    function loadMap() {
        const map = new ymaps.Map("map", {
            center: center,
            zoom: zoom
        }, {
            suppressMapOpenBlock: true
        });
       

        const placemark = new ymaps.Placemark(
            center, {},
            {
                iconLayout: 'default#image',
		        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/952/952332.png',
		        iconImageSize: [40, 40],
		        iconImageOffset: [-19, -44]
            }
        )

        

        map.geoObjects.add(placemark);
        map.controls.remove('geolocationControl'); 
        map.controls.remove('searchControl'); 
        map.controls.remove('trafficControl'); 
        map.controls.remove('typeSelector'); 
        map.controls.remove('fullscreenControl');
        map.controls.remove('zoomControl'); 
        map.controls.remove('rulerControl'); 
        map.behaviors.disable(['scrollZoom']); 
            
        Loaded = true;

    };     

</script>

   
{#if !Loaded}
    Загрузка...
{/if}
<div id="map"></div>   

<style lang="css">
    .load-img {
        margin-left: auto;
        height: 100px;
        width: 100px;
    }
    #map {
        width: 100%;
        height: 100%;
    }
</style>