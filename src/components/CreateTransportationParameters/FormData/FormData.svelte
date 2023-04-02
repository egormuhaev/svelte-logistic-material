<script>
  import { onDestroy } from "svelte";
  import { createTransportationParametersState } from "../../../store/store";
  import { setDate } from "../../../store/ActionCreators/createTransportationParametersState.ac";

  export let date;
  export let weather;

  const unsubscribe = createTransportationParametersState.subscribe((value) => {
    date = value.date;
    weather = value.weather;
  });

  const handleDateInput = (event) => {
    const val = event.target.value;
    setDate(val);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="wrapper">
  <label for="width" class="input-label">Дата перевозки</label>
  <input
    id="width"
    type="date"
    class="input"
    value={date}
    on:input={handleDateInput}
  />
  <h2 class="sub-title">{`Средняя температура: ${weather}`}</h2>
</div>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px;
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
    font-size: 17px;

    color: #252525;
  }
</style>
