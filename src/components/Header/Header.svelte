<script>
  import { Router, Link } from "svelte-navigator";
</script>

<div class="header">
  <Link to="/">
    <div class="btn-nav">Строительная площадки</div>
  </Link>
  <Link to="/create-providers">
    <div class="btn-nav">Поставщики</div>
  </Link>
  <Link to="/create-transportation-parameters">
    <div class="btn-nav">Параметры транспортировки</div>
  </Link>
</div>

<style>
  .btn-nav {
    border: none;
    border-radius: 0%;

    margin: 10px;

    height: 100%;
    width: auto;

    background-color: #fff;

    color: #79d196;

    font-weight: bold;
    font-size: 20px;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
</style>
