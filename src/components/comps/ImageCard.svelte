<script>
import Card, { Content, PrimaryAction, Media, MediaContent } from "@smui/card";
import { BACKEND_MEDIA_URL } from "../../utils/consts";
export let image_url = undefined;
export let link = undefined;
export let alt = undefined;
export let content = undefined;
</script>

<a class="content-wraper" href={link || "#"} data-type="institution">
  <Card>
    <div>
      <div class="img-container">
        <img
          width="100%"
          height="100%"
          src={BACKEND_MEDIA_URL + image_url}
          {alt}
          class="main-image"
        />
      </div>
      <div class="avatars">
        <!-- {#each get_avatars() as avatar, i}
          <div class="avatar" title={avatar.name} data-i={i}>
            <img
              data-src={JSON.stringify(avatar)}
              src={avatar?.favicon?.url
                ? BACKEND_MEDIA_URL + avatar?.favicon?.url
                : ""}
              alt="avatar"
              width="50px"
              height="50px"
              title={avatar.name}
            />
          </div>
        {/each} -->
      </div>
      <div class="content">
        {content || ""}
      </div>
      <!-- <div class="categories">
        {#each get_top_categories() as cat}
          <div class="category">
            {cat}
          </div>
        {/each}
      </div> -->
    </div>
    <!-- <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #black; position: absolute; bottom: 16px; right: 16px; margin: 0;"
        >
          
        </h2>
      </MediaContent>
    </Media> -->
  </Card>
</a>

<style lang="scss">
.content-wraper {
  text-decoration: none;
  color: black;
  &[data-type="institution"] {
    :global(.mdc-card) {
      background-color: #bddde79f;
    }
  }
  :global(.mdc-card) {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    :global(.mdc-card) {
      //background-color: #e0dddd;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      color: black;
    }
    &[data-type="institution"] {
      :global(.mdc-card) {
        background-color: #8fb6c2b6;
      }
    }
  }
}

.img-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  .main-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #888;
  }
}
</style>
