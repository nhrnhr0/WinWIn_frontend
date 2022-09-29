<script>
import ListSearch from "../../components/list/ListSearch.svelte";
import { page } from "$app/stores";
import { request_search } from "../../components/list/list-apis";
import ListResults from "../../components/list/ListResults.svelte";
import { searchParamsToSeachObject } from "./../../utils/functions";
import { browser } from "$app/environment";
import ListResultsMap from "../../components/list/ListResultsMap.svelte";

let searchObj = {};
let requesting = false;
let searchResults = undefined;
$: {
  $page;
  searchObj = searchParamsToSeachObject($page.url.searchParams);
  requesting = true;
  browser &&
    request_search(searchObj).then((data) => {
      requesting = false;
      searchResults = data;
    });
}
</script>

<ListSearch />
<div class="results-wraper">
  <ListResults {searchResults} {requesting} />
  <ListResultsMap {searchResults} {requesting} />
</div>

<style lang="scss">
.results-wraper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
