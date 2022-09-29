<script>
import CircularProgress from "@smui/circular-progress";
import Paper, { Title, Subtitle, Content } from "@smui/paper";
import Loading from "../Loading.svelte";
import ResultCard from "./ResultCard.svelte";
export let searchResults;
export let requesting;
</script>

<div class="inner-results-wraper">
  <Paper>
    <Content>
      {#if requesting}
        <Loading />
      {:else if searchResults && searchResults.length > 0}
        {#each searchResults as entry}
          <!-- <ResultCard {entry} /> -->
          <!-- {JSON.stringify(entry)} -->
          <ResultCard {entry} />
        {/each}
      {:else}
        <div class="no-results">
          <CircularProgress />
          <div class="no-results-text">
            <h2>לא מצאנו את מה שחיפשת</h2>
            <p>נסה חיפוש אחר</p>
          </div>
        </div>
      {/if}
    </Content>
  </Paper>
</div>

<style lang="scss">
.inner-results-wraper {
  margin: auto;
  border-radius: 10px;
  width: 550px;
  overflow: scroll;
  height: 100%;
  // :global(.smui-paper) {
  //   :global(.smui-paper__content) {
  //   }
  // }
  :global(.smui-paper) {
    :global(.smui-paper__content) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
