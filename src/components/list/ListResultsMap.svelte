<script>
import { browser } from "$app/environment";
import Paper, { Title, Subtitle, Content } from "@smui/paper";
import Loading from "../Loading.svelte";

let container;
let map;
let zoom = 8;
let center = { lat: -34.397, lng: 150.644 };

import { onMount } from "svelte";
let maps_init = false;
function initMap() {
  map = new google.maps.Map(container, {
    zoom,
    center,
  });
  maps_init = true;
  alert("maps init");
}
function is_maps_loaded() {
  let ret = document
    .querySelector("body")
    .classList.contains("google-maps-ready");
  alert("is_maps_loaded: " + ret);
  return ret;
}
onMount(() => {
  if (browser) {
    if (is_maps_loaded()) {
      initMap();
    } else {
      check_ready_interval = setInterval(() => {
        if (is_maps_loaded()) {
          initMap();
          clearInterval(check_ready_interval);
        }
      }, 100);
    }
  }
});
</script>

<div class="list-search-map">
  <Paper>
    <Content>
      <div class="full-screen" bind:this={container} />
    </Content>
  </Paper>
</div>

<style lang="scss">
.list-search-map {
  width: 100%;
  height: 550px;
  margin: auto;
  border-radius: 10px;
}
</style>
