<script>
  import { onDestroy } from "svelte";
  import { createProvidersState } from "../../../store/store";
  import ProviderListItem from "./ProviderListItem/ProviderListItem.svelte";

  export let providers;

  const unsubscribe = createProvidersState.subscribe((value) => {
    providers = [...value.providers];
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="list">
  {#each providers as { adress, orgInfo, id }, index}
    <ProviderListItem
      {id}
      city={adress.city}
      street={adress.street}
      build={adress.build}
      {index}
      orgName={orgInfo.orgName}
    />
  {/each}
</div>

<style>
  .list {
    box-sizing: border-box;
    padding: 5px;

    grid-area: list;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
</style>
