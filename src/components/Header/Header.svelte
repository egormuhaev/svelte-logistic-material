<script>
  import { Router, Link } from "svelte-navigator";
</script>

<div class="header">
  <Link to="/">
    <button class="btn-nav">Строительная площадки</button>
  </Link>
  <Link to="/create-providers">
    <button class="btn-nav">Поставщики</button>
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
