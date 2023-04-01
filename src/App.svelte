<script>
  import Header from "./components/Header/Header.svelte";
  import CreateBuildingSite from "./components/CreateBuildingSite/CreateBuildingSite.svelte";
  import CreateProviders from "./components/CreateProviders/CreateProviders.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<main class="wrapper">
  <Router>
    <Header />
    <Route>
      <CreateBuildingSite />
    </Route>
    <Route path="create-providers">
      <CreateProviders />
    </Route>
  </Router>
</main>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100vh;
    width: 100%;
  }
</style>
