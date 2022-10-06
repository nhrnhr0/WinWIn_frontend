<script>
import { BACKEND_MEDIA_URL } from "../../utils/consts";
//import mediumZoom from "medium-zoom";
import { browser } from "$app/environment";
import BigPicture from "bigpicture";

export let entry;
let images = undefined;
let _zoom_init = false;
let first_image = undefined;
function image_click(e) {
  BigPicture({
    el: e.target,
    //gallery: document.querySelectorAll(".gallery-item"),
  });
}

$: {
  if (entry) {
    let tempImages = [];

    tempImages = tempImages.concat(
      entry?.images?.data?.map((img) => {
        return {
          thub: BACKEND_MEDIA_URL + img?.attributes?.formats?.thumbnail?.url,
          src: BACKEND_MEDIA_URL + img?.attributes?.url,
          alt: img?.attributes?.alternativeText,
        };
      })
    );
    first_image = tempImages[0];
    images = tempImages.splice(0, tempImages.length + 1 - 2 * -1);
  }
}
</script>

<div class="gallery">
  {#if images && images.length > 0 && first_image}
    <div class="featured-image">
      <img src={first_image.src} alt={first_image.alt} on:click={image_click} />
    </div>
    <div class="gallery-strip">
      {#each images as image (image.src)}
        <div class="strip-item">
          <img
            class="gallery-item"
            src={image.src}
            alt={image.alt}
            width="100"
            height="100"
            on:click={image_click}
          />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
.gallery {
  width: 41.66667%;
  @media (min-width: 50em) {
    min-height: 280px;
    margin-top: 16px;
  }
  height: 425px;
  overflow: hidden;
  position: relative;
  min-height: 180px;
  width: 100%;
  height: 100%;
  max-height: -webkit-max-content;
  max-height: -moz-max-content;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .featured-image {
    height: 311px;

    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 385px;
    img {
      width: 100%;
    }
  }
  .gallery-strip {
    flex-wrap: wrap;
    align-content: space-between;

    @media screen and (min-width: 50em) {
      margin-top: 4px;
      min-height: 110px;
      // max-height: 110px;
      border-radius: 4px;
    }

    overflow: hidden;
    position: relative;
    display: flex;
    width: 100%;
    min-height: 180px;
    // max-height: 180px;
    margin-top: 0;
    .strip-item {
      flex: 1;
      position: relative;
      //flex: 1 0 calc(50% - 4px);
      //   height: calc(50% - 4px);
      cursor: pointer;
      margin-left: 4px;
      img {
        // width: 100%;
        // max-width: 100%;
        // height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
    .strip-item:nth-child(1) {
      display: none;
    }

    .strip-item:nth-child(5) {
      //   height: 80%;
      //   border: 1px solid red;
      overflow: hidden;
    }
    @media screen and (min-width: 50em) {
      .strip-item:last-child {
        margin-left: 0;
      }
    }
  }
}
</style>
