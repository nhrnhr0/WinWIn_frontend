<script>
import { page } from "$app/stores";
import AddressHeaderLabel from "../../../components/comps/AddressHeaderLabel.svelte";
import HeadingHighlights from "../../../components/comps/HeadingHighlights.svelte";
import ImageCard from "../../../components/comps/ImageCard.svelte";
import PhotoGallery from "../../../components/comps/PhotoGallery.svelte";
import SideInfo from "../../../components/comps/SideInfo.svelte";
import AcordionComponent from "../../../components/comps/AcordionComponent.svelte";
import UpperSocialButtons from "../../../components/comps/UpperSocialButtons.svelte";
import { BACKEND_MEDIA_URL } from "../../../utils/consts";
import CategoriesRoundedButtons from "../../../components/comps/CategoriesRoundedButtons.svelte";
import { goto } from "$app/navigation";
export let slug;
export let data;
</script>

<div class="page-wraper">
  <div class="map-and-contact">
    <SideInfo
      location={{ address: data.address, lat: data.lat, lng: data.lng }}
      gmaps_link={data.contact_info.google_maps}
      opening_hours={data.opening_hours}
    />
  </div>
  <main>
    <div class="header-content-wraper">
      <div class="header-content">
        <div class="heading-box">
          <div class="logo">
            <img
              src={BACKEND_MEDIA_URL + data?.favicon?.data?.attributes?.url}
              alt={data.name}
              width="80"
              height="80"
              class="logo-img"
            />
          </div>
          <div class="headings">
            <h1 class="title">
              {data.name}
            </h1>

            <HeadingHighlights cats={data?.business_categories?.data} />
            <AddressHeaderLabel address={data?.address} />
          </div>
        </div>
      </div>
      <UpperSocialButtons entry={data} />
    </div>

    <!--instatutions: -->
    <h2 class="helpers-title">רשימת עמותות שעסק תומך בהם:</h2>
    <div class="grid-wraper">
      {#each data?.institutions?.data as inst}
        <ImageCard
          image_url={inst.attributes.header_image.data.attributes.url}
          link="/institution/{inst.attributes.slug}"
          alt={inst.attributes.name}
          content={inst.attributes.name}
        />
      {/each}
    </div>
    {#if data?.frequently_asked_questions && data?.frequently_asked_questions.length > 0}
      <h3>שאלות ותשובות</h3>
      <AcordionComponent arr={data?.frequently_asked_questions} />
    {/if}

    {#if data?.business_categories}
      <CategoriesRoundedButtons
        on_click={(e, cat_name) => {
          // businessCategories=
          let searchObject = {};
          console.log(cat_name);

          searchObject.businessCategories = [cat_name];
          searchObject.filterGroup = "businesses";
          let searchParams = new URLSearchParams(searchObject);
          let url = "/list?" + searchParams.toString();
          console.log(url);
          goto(url);
        }}
        data={data?.business_categories?.data.map((cat) => cat.attributes.name)}
      />
      <!-- <div class="categories-grid-wraper">
        {#each data?.business_categories?.data as cat}
          <span class="cat">{cat.attributes.name}</span>
        {/each}
      </div> -->
    {/if}
  </main>

  <div class="photo-gallery">
    <PhotoGallery entry={data} />
  </div>
</div>

<style lang="scss">
.helpers-title {
  text-decoration: underline;
}
.grid-wraper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
.page-wraper {
  display: grid;
  // photo gallery | <main> | map+contact
  grid-template-columns: 2fr 3fr 2fr;
  gap: 10px;
}
.photo-gallery {
  margin-top: 90px;
  margin-left: 5px;
  //padding: 5px;
}
main {
  @media (min-width: 81.25em) {
    max-width: 1300px;
  }
  display: flex;
  flex-direction: column;

  .header-content-wraper {
  }
  background-color: rgba(240, 240, 240, 0.774);
  margin: auto;
  margin-top: 90px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  .header-content {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    @media screen and (max-width: 49.9375em) {
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }
    .heading-box {
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin: -20px 0 16px;
      // border: 1px solid blue;
      margin: 16px 0 45px;
      @media screen and (min-width: 34em) {
        flex-direction: row;
      }
      .logo {
        z-index: 2;
        position: relative;
        flex: 0;
        z-index: 10;
        @media screen and (min-width: 34em) {
          z-index: 2;
          margin-left: 16px;
        }
        img {
          width: 70px;
          height: 70px;
          max-width: 70px;
          max-height: 70px;
          border-radius: 50%;
          -o-object-fit: cover;
          object-fit: cover;
          background-color: #fff;
          box-shadow: 0 0 0 1px #f2f2f2;
          box-shadow: 0 0 0 1px #f2f2f2;
        }
      }
      .headings {
        width: 100%;
      }
    }
  }
}
</style>
