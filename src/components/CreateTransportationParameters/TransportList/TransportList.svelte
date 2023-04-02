<script>
  import { onDestroy } from "svelte";
  import { createTransportationParametersState } from "../../../store/store";
  import TransportListItem from "./TransportListItem/TransportListItem.svelte";

  export let transports;

  const unsubscribe = createTransportationParametersState.subscribe((value) => {
    transports = [...value.transportData];
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="transport-list">
  {#each transports as tr}
    <TransportListItem {...tr} />
  {/each}
</div>

<style>
  .transport-list {
    margin-top: 20px;
    margin-bottom: 20px;
    grid-area: transport-list;
    max-height: calc(100vh - 80px - 60px);

    overflow-y: scroll;
    scrollbar-width: none;

    box-sizing: border-box;
    padding: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .transport-list::-webkit-scrollbar {
    width: 0;
  }
</style>
