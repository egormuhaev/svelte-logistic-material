<script>
  import FormFoundation from "./FormFoundation/FormFoundation.svelte";
  import FormData from "./FormData/FormData.svelte";
  import ActionBtnSave from "./ActionBtnSave/ActionBtnSave.svelte";
  import FormTransport from "./FormTransport/FormTransport.svelte";
  import TransportList from "./TransportList/TransportList.svelte";
</script>

<div class="wrapper">
  <div class="form">
    <FormFoundation />
    <FormData />
    <ActionBtnSave />
  </div>
  <div class="param">
    <FormTransport />
    <TransportList />
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "form param";
    gap: 20px 20px;

    box-sizing: border-box;
    padding: 20px;

    height: 100%;
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    grid-area: form;

    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    box-sizing: border-box;
    padding: 17px;
  }

  .param {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "from-transport transport-list";
    gap: 20px 20px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    grid-area: param;
  }

  .main-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #79d196;

    border: none;

    margin-bottom: 35px;
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
    font-size: 24px;

    color: #252525;
  }
</style>
