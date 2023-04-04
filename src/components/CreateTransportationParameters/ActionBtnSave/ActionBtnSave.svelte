<script>
  import { onDestroy } from "svelte";
  import { navigate } from "svelte-navigator";
  import { createProvidersState } from "../../../store/store";

  export let flagNavigation = false;

  const unsubscribe = createProvidersState.subscribe((value) => {
    flagNavigation = value.providers.length > 0;
  });
  const handleSaveClick = () => {
    if (flagNavigation) {
      navigate("/result");
    }
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<button class="btn s" on:click={handleSaveClick}>Сохранить</button>

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
</style>
