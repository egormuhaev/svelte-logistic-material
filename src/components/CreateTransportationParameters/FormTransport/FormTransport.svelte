<script>
  import { onDestroy } from "svelte";
  import { createTransportationParametersState } from "../../../store/store";
  import {
    addTransportList,
    setTransportCount,
    setTransportModel,
  } from "../../../store/ActionCreators/createTransportationParametersState.ac";
  import ActiveList from "../ActiveList/ActiveList.svelte";
  export let model;
  export let count;

  const unsubscribe = createTransportationParametersState.subscribe((value) => {
    model = value.transport.modelInput;
    count = value.transport.count;
  });

  const handleAddClick = () => {
    addTransportList();
  };

  const handleModelInput = (event) => {
    const val = event.target.value;
    setTransportModel(val);
  };

  const handleCountInput = (event) => {
    const val = event.target.value;
    setTransportCount(val);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="from-transport">
  <h1 class="main-title">Параметры транспортировки</h1>
  <h2 class="sub-title">Транспорт</h2>
  <label for="height" class="input-label">Модель машины</label>
  <input
    id="height"
    type="text"
    class="input"
    value={model}
    on:input={handleModelInput}
  />
  <div class="cont">
    <label for="length" class="input-label">Кол-во</label>
    <input
      id="length"
      type="number"
      class="input"
      value={count}
      on:input={handleCountInput}
    />
    <button class="btn s" on:click={handleAddClick}>Добавить</button>
  </div>
  <ActiveList />
</div>

<style>
  .btn {
    border-radius: 4px;

    font-weight: bold;
    color: #252525;
    background-color: #79d196;
  }

  .s {
    margin-top: auto;
    margin-bottom: 0px;

    width: 100%;
    height: 41px;
  }
  .from-transport {
    grid-area: from-transport;
    box-sizing: border-box;
    padding: 15px;
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

  .cont {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    height: auto;
    width: 100%;
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
</style>
