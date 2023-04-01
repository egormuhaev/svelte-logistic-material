<script>
  import { onDestroy } from "svelte";
  import AcrionBtnSave from "./AcrionBtnSave/AcrionBtnSave.svelte";
  import FormAdress from "./FormAdress/FormAdress.svelte";
  import FormContact from "./FormContact/FormContact.svelte";
  import FormOrgInfo from "./FormOrgInfo/FormOrgInfo.svelte";
  import ProviderList from "./ProviderList/ProviderList.svelte";

  onDestroy(() => {});
</script>

<div class="wrapper">
  <div class="form">
    <FormAdress />
    <div class="provider-info">
      <FormOrgInfo />
      <FormContact />
      <AcrionBtnSave />
    </div>
  </div>
  <ProviderList />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-rows: 1fr;
    grid-template-areas: "form list";
    gap: 20px 20px;

    box-sizing: border-box;
    padding: 20px;

    height: 100%;
    width: 100%;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }

  .form {
    box-sizing: border-box;
    padding: 10px;
    gap: 10px;

    grid-area: form;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "provider-adres provider-info";

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }

  .provider-info {
    padding: 5px;
    padding-top: 75px;
    grid-area: provider-info;

    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr minmax(400px, 1fr);
      grid-template-areas: "form" "list";
      gap: 20px 20px;

      box-sizing: border-box;
      padding: 20px;

      height: 100%;
      width: 100%;

      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    .form {
      box-sizing: border-box;
      padding: 10px;
      gap: 10px;

      grid-area: form;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "provider-adres" "provider-info";

      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
  }
</style>
