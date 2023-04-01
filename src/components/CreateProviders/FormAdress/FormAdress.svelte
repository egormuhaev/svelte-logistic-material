<script>
  import ActionBtnAddProvider from "./ActionBtnAddProvider/ActionBtnAddProvider.svelte";
  import { createProvidersState } from "../../../store/store";
  import {
    setAdreesCity,
    setAdreesStreet,
    setAdreesBuild,
  } from "../../../store/ActionCreators/createProvidersState.ac";
  import { onDestroy } from "svelte";

  export let valCity;
  export let valStreet;
  export let valBuild;

  const unsubscribe = createProvidersState.subscribe((value) => {
    const { city, street, build } = value.adress;
    valCity = city;
    valBuild = build;
    valStreet = street;
  });

  onDestroy(() => {
    unsubscribe();
  });

  const handleCityInput = (event) => {
    const text = event.target.value;
    setAdreesCity(text);
  };

  const handleStreetInput = (event) => {
    const text = event.target.value;
    setAdreesStreet(text);
  };

  const handleBuildInput = (event) => {
    const text = event.target.value;
    setAdreesBuild(text);
  };
</script>

<div class="provider-adres">
  <h1 class="main-title">Поставщики</h1>
  <h2 class="sub-title">Адрес</h2>
  <label for="city" class="input-label">Город</label>
  <input
    id="city"
    type="text"
    class="input"
    placeholder="Например: Москва"
    value={valCity}
    on:input={handleCityInput}
  />
  <label for="street" class="input-label">Улица</label>
  <input
    id="street"
    type="text"
    class="input"
    placeholder="Напиример: ул. Новый Арбат"
    value={valStreet}
    on:input={handleStreetInput}
  />
  <label for="build" class="input-label">Строение</label>
  <input
    id="build"
    type="text"
    class="input"
    placeholder="Например: дом 6"
    value={valBuild}
    on:input={handleBuildInput}
  />
  <ActionBtnAddProvider />
</div>

<style>
  .provider-adres {
    padding: 5px;
    grid-area: provider-adres;

    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
  }

  .main-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #79d196;

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
</style>
