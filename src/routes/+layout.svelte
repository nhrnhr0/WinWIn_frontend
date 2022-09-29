<script>
import "../app.scss";
import { gmapsState } from "src/utils/stores/gmapsStore.js";
import { GoogleSdk } from "@beyonk/svelte-googlemaps";
function maps_ready() {
  $gmapsState = true;
}
</script>

<GoogleSdk
  apiKey={import.meta.env["VITE_MAPS_API_KEY"]}
  on:ready={maps_ready}
/>

<slot />
