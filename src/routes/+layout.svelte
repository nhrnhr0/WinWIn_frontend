<script>
import { query_selector_all } from "svelte/internal";
import "../app.scss";
export let ready = false;
</script>

<svelte:head>
  <script>
  window.initMap = function ready() {
    document.querySelector("body").classList.add("google-maps-ready");
  };
  </script>
  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDg2-oIlaCiIQbuWcIBP3ZeolZq0Psnxeg&libraries=places&language=iw"></script>
  <script
    src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key={import.meta.env[
      'VITE_MAPS_API_KEY'
    ]}&callback=initMap">
  </script>
</svelte:head>

<slot />
ready: {ready}
