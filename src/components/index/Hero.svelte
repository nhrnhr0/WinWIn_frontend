<script>
import { BACKEND_MEDIA_URL, BACKEND_URL } from "src/utils/consts";
import Card, { Content } from "@smui/card";
import { mdiMagnify } from "@mdi/js";
import IconButton, { Icon } from "@smui/icon-button";
import { Svg } from "@smui/common/elements";
import Textfield from "@smui/textfield";
import HelperText from "@smui/textfield/helper-text";
export let data;
let searchValue = "";
</script>

<!-- 
    example data:
   "title": "WinWin - פלטפורמה לאימפקט חיובי",
            "about": "# Lorem Ipsum \n### is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n![ffffff[2].png](http://localhost:1337/uploads/ffffff_2_ede175702b.png)\nLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n",
            "subtitle": "לעשות טוב על הדרך",
            "createdAt": "2022-09-20T13:14:49.064Z",
            "updatedAt": "2022-09-20T14:01:07.020Z",
            "publishedAt": "2022-09-20T13:14:52.774Z",
            "hero_image": {
                "data": {
            "id": 12,
            "attributes": {
            "name": "zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "alternativeText": "zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "caption": "zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "width": 1440,
            "height": 814,
            "formats": {
            "thumbnail": {
            "name": "thumbnail_zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "hash": "thumbnail_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f",
            "ext": ".png",
            "mime": "image/png",
            "path": null,
            "width": 245,
            "height": 138,
            "size": 50.22,
            "url": "/uploads/thumbnail_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f.png"
            },
            "small": {
            "name": "small_zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "hash": "small_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f",
            "ext": ".png",
            "mime": "image/png",
            "path": null,
            "width": 500,
            "height": 283,
            "size": 158.79,
            "url": "/uploads/small_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f.png"
            },
            "medium": {
            "name": "medium_zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "hash": "medium_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f",
            "ext": ".png",
            "mime": "image/png",
            "path": null,
            "width": 750,
            "height": 424,
            "size": 352.26,
            "url": "/uploads/medium_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f.png"
            },
            "large": {
            "name": "large_zac-durant-_6HzPU9Hyfg-unsplash (1) 1.png",
            "hash": "large_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f",
            "ext": ".png",
            "mime": "image/png",
            "path": null,
            "width": 1000,
            "height": 565,
            "size": 653.24,
            "url": "/uploads/large_zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f.png"
            }
            },
            "hash": "zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f",
            "ext": ".png",
            "mime": "image/png",
            "size": 216.47,
            "url": "/uploads/zac_durant_6_Hz_PU_9_Hyfg_unsplash_1_1_3460dd799f.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2022-09-20T14:01:02.648Z",
            "updatedAt": "2022-09-20T14:01:02.648Z"
            }
            }
            }
-->

<!-- display a hero section with the "hero_image" as the backround and infront a searchbar with a search icon and underneth the subtitle (fit for all devices, based on material UI) -->
<div class="hero">
  <div class="content">
    <!-- search bar -->
    <div class="search-bar">
      <Textfield
        variant="outlined"
        label={data?.searchPlaceholder || "חפש"}
        bind:value={searchValue}
        class="search-input"
      >
        <Icon class="material-icons" slot="leadingIcon">search</Icon>
        <HelperText slot="helper"
          >{data?.searchHelperTxt ||
            "חפש שם עמותתה/עסק/תחום עיסוק/מוצר"}</HelperText
        >
      </Textfield>
    </div>
  </div>
  <img
    src="{BACKEND_MEDIA_URL}{data?.hero_image?.data?.attributes?.url}"
    alt=""
  />
</div>

<style lang="scss">
.hero {
  // background image:
  position: relative;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(0%, 0%);
  }
  .content {
    // search bar:
    z-index: 1;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);

    .search-bar {
      background-color: white;
      border-radius: 10px;
      padding: 1rem;
      :global(.search-input) {
        width: 100%;
        max-width: 500px;
        border-radius: 0;

        :global(.mdc-text-field__input) {
          padding: 0.5rem 1rem;
        }
        :global(.mdc-text-field__icon) {
          color: #e0e0e0;
        }
      }
    }
  }
  // subtitle:
}
</style>
