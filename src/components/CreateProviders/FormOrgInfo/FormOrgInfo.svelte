<script>
  import { createProvidersState } from "../../../store/store";
  import { setOrgInfoName } from "../../../store/ActionCreators/createProvidersState.ac";
  import { onDestroy } from "svelte";

  export let valOrgName;

  const unsubscribe = createProvidersState.subscribe((value) => {
    const { orgName } = value.orgInfo;
    valOrgName = orgName;
  });

  const handleOrgNameInput = (event) => {
    const text = event.target.value;
    setOrgInfoName(text);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<h2 class="sub-title org-info">Об организации</h2>
<label for="org-name" class="input-label">Наименование организации</label>
<input
  id="org-name"
  type="text"
  class="input"
  placeholder="Например: Мостковкий бетонный завод"
  value={valOrgName}
  on:input={handleOrgNameInput}
/>

<style>
  .org-info {
    margin-top: 39px;
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
</style>
