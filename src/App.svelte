<script>
  export let name;
  import Router from "svelte-spa-router";
  import routes from 'src/routes';
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {}

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>