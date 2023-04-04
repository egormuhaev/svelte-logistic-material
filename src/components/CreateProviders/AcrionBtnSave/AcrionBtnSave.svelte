<script>
  import { createProvidersState } from "../../../store/store";
  import { navigate } from "svelte-navigator";

  export let flagNavigation = false;

  const unsubscribe = createProvidersState.subscribe((value) => {
    flagNavigation = value.providers.length > 0;
  });
  const handleSaveClick = () => {
    if (flagNavigation) {
      navigate("/create-transportation-parameters");
    }
  };
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
    margin-left: auto;
    margin-right: 0px;
    width: 144px;
    height: 41px;
  }
</style>
