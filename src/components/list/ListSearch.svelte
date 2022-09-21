<script>
import Textfield from "@smui/textfield";
import { mdiMagnify } from "@mdi/js";
import IconButton, { Icon } from "@smui/icon-button";
import { Svg } from "@smui/common/elements";
import HelperText from "@smui/textfield/helper-text";
import Button, { Group, Label } from "@smui/button";
import Select from "svelte-select";
import { goto } from "$app/navigation";
import Paper, { Title, Subtitle, Content } from "@smui/paper";
import { page } from "$app/stores";

import {
  getBusinessCategoriesOptions,
  getCharitiesCategoriesOptions,
} from "./list-apis";
import { onMount } from "svelte";
import { searchParamsToSeachObject } from "../../utils/functions";
import Loading from "../Loading.svelte";
import PlaceHolder from "../PlaceHolder.svelte";

export let businessCategoriesOptions;
export let charitiesCategoriesOptions;
let searchValue = "";
let locationhValue = "";
let businessCategoriesValue = undefined;
let charitiesCategoriesValue = undefined;
let is_options_loaded = false;
onMount(async () => {
  if (!businessCategoriesOptions) {
    businessCategoriesOptions = await getBusinessCategoriesOptions();
  }
  if (!charitiesCategoriesOptions) {
    charitiesCategoriesOptions = await getCharitiesCategoriesOptions();
  }
  is_options_loaded = true;
  // read the query params

  // searchValue = params.get("search") || "";
  // locationhValue = params.get("location") || "";
  // businessCategoriesValue =
  //   params.get("businessCategories") == ""
  //     ? undefined
  //     : params.get("businessCategories").split(",");
  // charitiesCategoriesValue =
  //   params.get("charitiesCategories") == ""
  //     ? undefined
  //     : params.get("charitiesCategories").split(",");
  // filterGroup = params.get("filterGroup") || "all";
  const searchObj = searchParamsToSeachObject($page.url.searchParams);
  searchValue = searchObj.search || "";
  locationhValue = searchObj.location || "";
  businessCategoriesValue = searchObj.businessCategories || undefined;
  charitiesCategoriesValue = searchObj.charitiesCategories || undefined;
  filterGroup = searchObj.filterGroup || "all";
});

function filterButtonClicked(e) {
  console.log("filterButtonClicked");
  filterGroup = e.currentTarget.value;
}

function handle_search_click(e) {
  console.log("handle_search_click");
  console.log(searchValue);
  console.log(locationhValue);
  console.log(businessCategoriesValue);
  console.log(charitiesCategoriesValue);
  // create a new url with the search params
  // and redirect to it
  let searchObject = {
    search: searchValue,
    location: locationhValue,
    businessCategories:
      businessCategoriesValue?.map((item) => item.value) || "",
    charitiesCategories:
      charitiesCategoriesValue?.map((item) => item.value) || "",
    filterGroup: filterGroup,
  };
  let searchParams = new URLSearchParams(searchObject);
  let url = "/list?" + searchParams.toString();
  console.log(url);
  goto(url);
}

let filterGroup = "all";
</script>

<!-- 
    serach seaction on top of the page
    with:
    1) search by input
    2) search by locaiton
    3) options to select from (businesses, charities, businesses&charities, )
    4) business categories (if selected)
    5) charity categories (if selected)
-->

<div class="list-search-component">
  <Paper>
    <Content>
      <!-- row with 2 search bars with icons -->
      <div class="search-inputs">
        <div class="search-bar">
          <Textfield
            bind:value={searchValue}
            variant="outlined"
            label={"חפש לפי מילות מפתח"}
            class="search-input"
          >
            <Icon class="material-icons" slot="leadingIcon">search</Icon>
            <HelperText slot="helper"
              >{"חפש שם עמותתה/עסק/תחום עיסוק/מוצר"}</HelperText
            >
          </Textfield>
        </div>
        <div class="search-bar">
          <Textfield
            bind:value={locationhValue}
            variant="outlined"
            label={"חיפוש באזור"}
            class="search-input"
          >
            <Icon class="material-icons" slot="leadingIcon">location_on</Icon>
            <HelperText slot="helper">{"בחר מיקום מהרשימה"}</HelperText>
          </Textfield>
        </div>
      </div>
      <div class="split-buttons">
        <!-- split buttons with 3 option: 
    עסקים
    עסקים ועמותות
    עמותות
-->
        <Group variant="outlined">
          <Button
            value="businesses"
            on:click={filterButtonClicked}
            variant={filterGroup == "businesses" ? "raised" : "outlined"}
          >
            <Label>עסקים</Label>
          </Button>
          <Button
            value="all"
            on:click={filterButtonClicked}
            variant={filterGroup == "all" ? "raised" : "outlined"}
          >
            <Label>עסקים & עמותות</Label>
          </Button>
          <Button
            value="charities"
            on:click={filterButtonClicked}
            variant={filterGroup == "charities" ? "raised" : "outlined"}
          >
            <Label>עמותות</Label>
          </Button>
        </Group>
      </div>

      <!-- categories -->
      <!-- 
        show 2 autocomplete fields with categories (businesses and charities)
        if the user selected to search for businesses or for both businesses and charities: make charities autocomplete field disabled
        if the user selected to search for charities: make businesses autocomplete field disabled
        
    -->
      <div class="autocompleates">
        {#key is_options_loaded}
          <Select
            items={charitiesCategoriesOptions}
            isMulti={true}
            placeholder="בחר קטגוריות עמותות"
            isDisabled={filterGroup == "businesses"}
            groupBy={(item) => item?.group || ""}
            bind:value={charitiesCategoriesValue}
          />
          <Select
            items={businessCategoriesOptions}
            isMulti={true}
            placeholder="בחר קטגוריות עסקים"
            isDisabled={filterGroup == "charities"}
            groupBy={(item) => item?.group || ""}
            bind:value={businessCategoriesValue}
          />
        {/key}
      </div>
      <div class="serach-btn">
        <Button variant="raised" on:click={handle_search_click}>חפש</Button>
      </div>
    </Content>
  </Paper>
</div>

<style lang="scss">
.list-search-component {
  max-width: 90%;
  margin: auto;
  margin-top: 20px;
  // background-color: var(--serfuce) darker
  //background: var(--up-surface-1);
  border-radius: 10px;
  padding: 20px;
  .search-inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .search-bar {
      width: 100%;
      max-width: 500px;
      :global(.search-input) {
        width: 100%;
        max-width: 500px;
        border-radius: 0;
        :global(.mdc-text-field__input) {
          padding: 0.5rem 1rem;
        }
        :global(.mdc-text-field__icon) {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
  .split-buttons {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    :global(.smui-button__group) {
      direction: ltr;
    }
  }

  .autocompleates {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    :global(.selectContainer) {
      width: 100%;
      max-width: 500px;
    }
  }

  .serach-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    :global(button) {
      width: 100%;
      max-width: 500px;
      font-weight: bold;
      font-size: 1.2rem;
      //color: white;
    }
  }
}
</style>
