<script>
  import { addNewProvider } from "../../../../store/ActionCreators/createProvidersState.ac";
</script>

<button
  class="btn m"
  on:click={() => {
    addNewProvider();
  }}
  >Добавить постащика
</button>

<style>
  .btn {
    border-radius: 4px;

    font-weight: bold;
    color: #252525;
    background-color: #79d196;
  }

  .m {
    margin-top: auto;
    margin-bottom: 0px;
    width: 291px;
    height: 41px;
  }
</style>
