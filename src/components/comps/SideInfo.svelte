<script>
import { onMount } from "svelte";
import { gmapsState } from "src/utils/stores/gmapsStore.js";
// import SideOpeningHours from "./SideOpeningHours.svelte";
export let gmaps_link = undefined;
export let location;
export let opening_hours;
let mapElement;
let marker;

onMount(() => {
  set_init_map_interval();
});

function set_init_map_interval() {
  let interval = setInterval(() => {
    if ($gmapsState) {
      initMap();
      clearInterval(interval);
    }
  }, 100);
}
function initMap() {
  let center = { lat: parseFloat(location.lat), lng: parseFloat(location.lng) };
  if (mapElement == undefined && $gmapsState) {
    mapElement = new window.google.maps.Map(
      document.getElementById("small-map"),
      {
        zoom: 13,
        center: center,
      }
    );
    marker = new window.google.maps.Marker({
      position: { lat: center.lat, lng: center.lng },
      icon: undefined,
      map: mapElement,
    });
  }
}
</script>

<!-- {JSON.stringify(location)}: {"address":"המסגר 12, אופקים, ישראל","lat":"31.3199428","lng":"34.6232666"} -->

<div class="map-container">
  <div id="small-map" />

  <div class="links">
    <a
      class="google-maps action-button"
      href={gmaps_link
        ? gmaps_link
        : `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
      target="_blank"
      title="פתח ב-Google Maps"
    >
      <button aria-labelledby="action-google-maps-label" class="action-circle">
        <img src="/google-maps-old.svg" alt="" />
      </button>
      <span id="action-google-maps-label" class="action-text"> maps </span>
    </a>
    <!--example waze link:  https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17-->
    <a
      class="waze action-button"
      href={`https://www.waze.com/ul?ll=${location.lat}%2C${location.lng}&navigate=yes&zoom=17`}
      target="_blank"
      title="פתח ב-Waze"
    >
      <button aria-labelledby="action-waze-label" class="action-circle">
        <img src="/waze-icon.svg" width="48px" height="48px" alt="" />
      </button>
      <span id="action-waze-label" class="action-text"> waze </span>
    </a>
  </div>

  <!-- <SideOpeningHours {opening_hours} /> -->
</div>

<style lang="scss">
.map-container {
  margin: auto;
  margin-top: 90px;
  //   margin-right: 20px;
  //   margin-left: 20px;
  border-radius: 15px;
  width: 95%;
  height: 90%;
  max-height: 350px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  //   border: 1px solid red;
  #small-map {
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
}
.links {
  display: flex;
  flex-direction: row;
  //   border: 1px solid red;
  justify-content: flex-end;
  transform: translateY(-50%);
  .action-button {
    margin-right: 0;
    margin-left: 8px;
    position: relative;
    min-width: 77px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    margin: 0 0 0 8px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-weight: 600;
    button.action-circle {
      -webkit-appearance: none;
      background-color: transparent;
      outline: none;
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #2375d3;

      box-shadow: 0 2px 4px 2px rgb(0 0 0 / 10%);
      img,
      svg {
        transform: scale(0.7);
      }
    }
    .action-text {
      text-decoration: none;
      margin-top: 8px;
      font-size: 0.875rem;
      white-space: nowrap;
      color: black;
      text-decoration: none;
      //font-weight: 700;
      font-weight: normal;
      display: none;
    }

    &:hover {
      .action-circle {
        background-color: #1e6ac7;
        // img,
        // svg {
        //   transform: scale(1.1);
        // }
      }
    }
  }
}
</style>
