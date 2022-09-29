<script>
import { BACKEND_MEDIA_URL } from "../../utils/consts";
import { gmapsState } from "src/utils/stores/gmapsStore.js";
import { onMount, onDestroy } from "svelte";

export let searchResults;
export let requesting;
let markers = [];
// let center = undefined;
let mapElement;
// let markers_list = [];
// function initialise() {
//   ready = true;
// }
// $: {
//   searchResults;
//   // when searchResults changes, update center to be the center of all the results
//   let newCenter = undefined;
//   if (searchResults && searchResults.length > 0) {
//     for (let i = 0; i < searchResults.length; i++) {
//       const result = searchResults[i];
//       if (result.lat && result.lng) {
//         if (newCenter) {
//           newCenter.lat += parseFloat(result.lat);
//           newCenter.lng += parseFloat(result.lng);
//         } else {
//           newCenter = {
//             lat: parseFloat(result.lat),
//             lng: parseFloat(result.lng),
//           };
//         }
//       }
//     }
//     if (newCenter) {
//       newCenter.lat /= searchResults.length;
//       newCenter.lng /= searchResults.length;
//     }
//     center = newCenter;
//     // delete all markers
//     if (searchResults && mapElement && ready) {
//       markers_list = [];
//       // add markers

//       for (let i = 0; i < searchResults.length; i++) {
//         let lat = parseFloat(searchResults[i].lat);
//         let lng = parseFloat(searchResualts[i].lng);
//         markers_list.push(
//           new window.google.maps.Marker({
//             position: { lat, lng },
//             icon: undefined,
//             map: mapElement,
//           })
//         );
//       }
//     }
//   }
// }
function calcCenter() {
  let newCenter = undefined;
  if (searchResults == undefined || searchResults.length == 0) {
    // return tel aviv
    return { lat: 32.0853, lng: 34.7818 };
  }
  for (let i = 0; i < searchResults.length; i++) {
    const result = searchResults[i];
    if (result.lat && result.lng) {
      if (newCenter) {
        newCenter.lat += parseFloat(result.lat);
        newCenter.lng += parseFloat(result.lng);
      } else {
        newCenter = {
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lng),
        };
      }
    }
  }
  if (newCenter) {
    newCenter.lat /= searchResults.length;
    newCenter.lng /= searchResults.length;
  }
  return newCenter;
}
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
function createMarkers() {
  if (mapElement && $gmapsState) {
    for (let i = 0; i < searchResults.length; i++) {
      let lat = parseFloat(searchResults[i].lat);
      let lng = parseFloat(searchResults[i].lng);
      markers.push(
        new window.google.maps.Marker({
          position: { lat, lng },
          icon: undefined,
          map: mapElement,
        })
      );
    }
    return markers;
  }
}
function initMap() {
  let center = calcCenter();
  if (mapElement == undefined && $gmapsState) {
    mapElement = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: center,
    });
  }
  //markers = createMarkers();
}

let unsub_gmapsState;
onMount(() => {
  check_init_interval();
  // initMap();
  // unsub_gmapsState = gmapsState.subscribe((v) => {
  //   if (v) {
  //     initMap();
  //   }
  // });
});
function check_init_interval() {
  let interval = setInterval(() => {
    if ($gmapsState) {
      initMap();
      clearInterval(interval);
    }
  }, 100);
}
$: {
  searchResults;
  if (searchResults && $gmapsState && mapElement) {
    clearMarkers();
    markers = createMarkers();
    let center = calcCenter();
    mapElement.setCenter(center);
  }
}
onDestroy(() => {
  if (mapElement) {
    mapElement = undefined;
  }
  // if (unsub_gmapsState) {
  //   unsub_gmapsState();
  // }
});
</script>

<div class="map-wraper">
  <div class="inner">
    <div id="map" />
  </div>
</div>

<style lang="scss">
.map-wraper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inner {
    width: 95%;
    height: 95%;

    #map {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
