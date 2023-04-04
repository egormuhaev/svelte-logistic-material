<script>
  import Header from "./components/Header/Header.svelte";
  import CreateBuildingSite from "./components/CreateBuildingSite/CreateBuildingSite.svelte";
  import CreateProviders from "./components/CreateProviders/CreateProviders.svelte";
  import CreateTransportationParameters from "./components/CreateTransportationParameters/CreateTransportationParameters.svelte";
  import ResultPage from "./components/ResultPage/ResultPage.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<main class="wrapper">
  <Router>
    <Header />
    <Route>
      <CreateBuildingSite />
    </Route>
    <Route path="create-providers" component={CreateProviders} />
    <Route
      path="create-transportation-parameters"
      component={CreateTransportationParameters}
    />
    <Route path="result">
      <ResultPage />
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
