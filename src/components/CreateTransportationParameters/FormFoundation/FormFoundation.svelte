<script>
  import { createTransportationParametersState } from "../../../store/store";
  import {
    setL,
    setW,
    setH,
  } from "../../../store/ActionCreators/createTransportationParametersState.ac";
  import { onDestroy } from "svelte";

  export let length;
  export let width;
  export let height;
  export let volume;

  const unsubscribe = createTransportationParametersState.subscribe((value) => {
    const { l, h, v, w } = value.foundation;
    length = l;
    height = h;
    width = w;
    volume = v + v * 0.05;
  });

  const handleLengthInput = (event) => {
    const val = event.target.value;
    setL(val);
  };

  const handleWidthInput = (event) => {
    const val = event.target.value;
    setW(val);
  };

  const handleHeightInput = (event) => {
    const val = event.target.value;
    setH(val);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<h2 class="sub-title">Фундамент</h2>
<label for="height" class="input-label">Высота (H), м</label>
<input
  id="height"
  type="number"
  class="input"
  value={height}
  on:input={handleHeightInput}
/>
<label for="length" class="input-label">Длинна (L), м</label>
<input
  id="length"
  type="number"
  class="input"
  value={length}
  on:input={handleLengthInput}
/>
<label for="width" class="input-label">Ширина (W), м</label>
<input
  id="width"
  type="number"
  class="input"
  value={width}
  on:input={handleWidthInput}
/>
<h2 class="sub-title">{`Объем цемента: ${volume} м3`}</h2>

<style>
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
