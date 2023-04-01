<script>
  import { onDestroy } from "svelte";
  import { createProvidersState } from "../../../store/store";

  export let providers;

  const unsubscribe = createProvidersState.subscribe((value) => {
    providers = [...value.providers];
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="list">
  {#each providers as provider}
    <p>{provider.orgInfo.orgName}</p>
  {/each}
</div>

<style>
  .list {
    grid-area: list;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
</style>
