<script>
  import { createProvidersState } from "../../../store/store";
  import {
    setContectTel,
    setContectEmail,
  } from "../../../store/ActionCreators/createProvidersState.ac";
  import { onDestroy } from "svelte";

  export let valTel;
  export let valEmail;

  const unsubscribe = createProvidersState.subscribe((value) => {
    const { tel, email } = value.contact;
    valEmail = email;
    valTel = tel;
  });

  const handleTelInput = (event) => {
    const text = event.target.value;
    setContectTel(text);
  };
  const handleEmailInput = (event) => {
    const text = event.target.value;
    setContectEmail(text);
  };

  onDestroy(() => {
    unsubscribe();
  });
</script>

<h2 class="sub-title contact-info">Контактная информация</h2>
<label for="contact-tel" class="input-label"
  >Номер телефона (необязательно)</label
>
<input
  id="contact-tel"
  type="text"
  class="input"
  placeholder="Пример: 8 999 123 45 67"
  value={valTel}
  on:input={handleTelInput}
/>
<label for="contact-email" class="input-label">Email (необязательно)</label>
<input
  id="contact-email"
  type="text"
  class="input"
  placeholder="Например: example@mail.ru"
  value={valEmail}
  on:input={handleEmailInput}
/>

<style>
  .contact-info {
    margin-top: 39px;

    color: #79d196;
    font-weight: 300;
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
