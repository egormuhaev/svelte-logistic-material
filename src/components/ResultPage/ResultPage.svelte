<script>
  import ResultYMap from "./ResultYMap/ResultYMap.svelte";
  import ProviderList from "./ProviderList/ProviderList.svelte";
  import { resultPageState } from "../../store/store";
  import ModalInfo from "./ModalInfo/ModalInfo.svelte";
  import { onDestroy } from "svelte";

  export let endPoint;
  export let reload;

  const unsubscribe = resultPageState.subscribe((value) => {
    endPoint = value.map.endPoint;
    reload = value.map.reload;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="wrapper">
  <div class="map">
    {#if reload}
      <ResultYMap {endPoint} />
    {:else}
      <ResultYMap {endPoint} />
    {/if}
  </div>
  <ProviderList />
  <ModalInfo />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "list map";
    gap: 20px 20px;

    box-sizing: border-box;
    padding: 20px;

    height: 100%;
    width: 100%;
  }

  .map {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    grid-area: map;

    box-sizing: border-box;
  }
</style>
