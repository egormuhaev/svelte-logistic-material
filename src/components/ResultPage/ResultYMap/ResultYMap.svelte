<svelte:head>
    <title>Map example</title>
    <script src='https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=71593fe8-b06e-4225-b546-a96546161871'
            type="text/javascript" on:load={() => ymaps.ready(loadMap)} />
</svelte:head>

<script>
    import { onDestroy } from "svelte";
import {  createBuildingSiteState, resultPageState } from "../../../store/store";
    export let center;
    export let endPoint;
    

    const unsubscribe = createBuildingSiteState.subscribe((value) => {
        center = [value.map[0].latitude, value.map[0].longitude]
    })

    onDestroy(() => {
        unsubscribe();
    })


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

        const placemarkEnd = new ymaps.Placemark(
            endPoint, {},
            {
                iconLayout: 'default#image',
		        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2821/2821850.png',
		        iconImageSize: [40, 40],
		        iconImageOffset: [-19, -44]
            }
        )

        var multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                endPoint,
                center,
            ],
            params: {
      
            routingMode: "auto"  
            }
        }, {
   
            boundsAutoApply: true
        });

      
          


        map.geoObjects.add(multiRoute);
        map.geoObjects.add(placemark);
        map.geoObjects.add(placemarkEnd);
        map.controls.remove('geolocationControl'); 
        map.controls.remove('searchControl'); 
        map.controls.remove('trafficControl'); 
        map.controls.remove('typeSelector'); 
        map.controls.remove('fullscreenControl');
        // map.controls.remove('zoomControl'); 
        map.controls.remove('rulerControl'); 
        map.behaviors.disable(['scrollZoom']); 
            
        Loaded = true;

        multiRoute.model.events.add('requestsuccess', function() {
  
            var activeRoute = multiRoute.getActiveRoute();

            resultPageState.update((value) => {
                return {
                    ...value,
                    route: {
                        distance: activeRoute.properties.get("distance").text,
                        time: activeRoute.properties.get("duration").text,
                        blocked: activeRoute.properties.get("blocked")
                    }
                }
            })
        }); 

    };     
</script>


{#if !Loaded}
    Загрузка...
{/if}
<div id="map"></div>   

<style lang="css">
    #map {
        width: 100%;
        height: 100%;
    }
</style>
