<script>
  import YandexMap from "./YandexMap/YandexMap.svelte";
  import { createBuildingSiteState } from "../../store/store";
  import axios from "axios";
  import { onDestroy } from "svelte";
  import { config } from "../../config/config";
  import { navigate } from "svelte-navigator";

  export let locations = [];
  export let center = [];
  export let zoom = 9;

  export let city = "";
  export let street = "";
  export let build = "";

  export let reload = false;

  const unsubscribeGeoObj = createBuildingSiteState.subscribe((value) => {
    console.log(value);
    locations = [...value.map];
    center = [value.map[0].latitude, value.map[0].longitude];
    reload = value.mapReloadStatus;
    city = value.inputForm.city;
    street = value.inputForm.street;
    build = value.inputForm.build;
  });

  onDestroy(() => {
    unsubscribeGeoObj();
  });

  const handleClickAdress = async () => {
    try {
      const res = await axios.get(
        `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${
          config.YANDEX_API_KEY
        }&geocode=${city.replace(" ", "+")}+${street.replace(
          " ",
          "+"
        )}+${build.replace(" ", "+")}`
      );
      const pos =
        res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
          " "
        );
      let latitude = Number(pos[1]);
      let longitude = Number(pos[0]);

      createBuildingSiteState.update((value) => {
        return {
          ...value,
          map: [
            {
              ...value.map[0],
              latitude,
              longitude,
            },
          ],
          mapReloadStatus: !reload,
        };
      });
      zoom = 15;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityInput = (event) => {
    const text = event.target.value;
    createBuildingSiteState.update((value) => {
      return {
        ...value,
        inputForm: {
          ...value.inputForm,
          city: text,
        },
      };
    });
  };

  const handleStreetInput = (event) => {
    const text = event.target.value;
    createBuildingSiteState.update((value) => {
      return {
        ...value,
        inputForm: {
          ...value.inputForm,
          street: text,
        },
      };
    });
  };

  const handleBuildInput = (event) => {
    const text = event.target.value;
    createBuildingSiteState.update((value) => {
      return {
        ...value,
        inputForm: {
          ...value.inputForm,
          build: text,
        },
      };
    });
  };

  const handleSaveClick = () => {
    if ((city !== "" && street !== "", build !== "")) {
      navigate("/create-providers");
    }
  };
</script>

<div class="wrapper">
  <div class="form">
    <h1 class="main-title">Строительная площадка</h1>
    <h2 class="sub-title">Адрес</h2>
    <label for="city" class="input-label">Город</label>
    <input
      id="city"
      type="text"
      class="input"
      value={city}
      on:input={handleCityInput}
    />
    <label for="street" class="input-label">Улица</label>
    <input
      id="street"
      type="text"
      class="input"
      value={street}
      on:input={handleStreetInput}
    />
    <label for="build" class="input-label">Дом, Строение</label>
    <input
      id="build"
      type="text"
      class="input"
      value={build}
      on:input={handleBuildInput}
    />
    <button class="create-btn" on:click={handleClickAdress}>Создать</button>
    <button class="next-btn" on:click={handleSaveClick}>Сохранить</button>
  </div>
  <div class="map">
    {#if reload}
      <YandexMap {locations} {center} {zoom} />
    {:else}
      <YandexMap {locations} {center} {zoom} />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "form map";
    gap: 20px 20px;

    box-sizing: border-box;
    padding: 20px;

    height: 100%;
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    grid-area: form;

    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    box-sizing: border-box;
    padding: 17px;
  }

  .map {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    grid-area: map;
  }

  .main-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #79d196;

    border: none;

    margin-bottom: 35px;
  }

  .input {
    height: 45px;
    width: 100%;

    box-sizing: border-box;

    opacity: 0.7;

    border: 1px solid #252525;
    border-radius: 4px;
  }

  .input-label {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .sub-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;

    color: #252525;
  }

  .create-btn {
    margin-top: auto;
    margin-bottom: 0px;

    width: 169px;
    height: 51px;

    background: #79d196;
    border-radius: 4px;

    color: white;
  }

  .next-btn {
    margin-top: auto;
    margin-bottom: 0px;

    width: 100%;
    height: 51px;

    background: #79d196;
    border-radius: 4px;

    color: white;
  }
</style>
