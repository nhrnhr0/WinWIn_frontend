<script>
import { page } from "$app/stores";
import AddressHeaderLabel from "../../../components/comps/AddressHeaderLabel.svelte";
import HeadingHighlights from "../../../components/comps/HeadingHighlights.svelte";
import UpperSocialButtons from "../../../components/comps/UpperSocialButtons.svelte";
import { BACKEND_MEDIA_URL } from "../../../utils/consts";
export let slug;
export let data;
</script>

<main>
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
</main>

<style lang="scss">
main {
  @media (min-width: 81.25em) {
    max-width: 1300px;
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
