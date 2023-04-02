<script>
  import { onDestroy } from "svelte";
  import { createTransportationParametersState } from "../../../store/store";

  export let active;

  const unsubscribe = createTransportationParametersState.subscribe((value) => {
    active = [...value.transport.activeList];
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="item">
  {#each active as { model, count }, index}
    <h1 class="list-item">
      {`${index + 1}.  ${model}`}<span class="t">{`${count} шт`}</span>
    </h1>
  {/each}
</div>

<style>
  .item {
    margin-top: 20px;
    border-top: 1px solid #252525;
    width: 100%;
    height: auto;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #252525;
    font-size: 13px;
    text-align: left;
  }

  .t {
    margin-left: auto;
    margin-right: 0;
    text-align: right;
  }
</style>
