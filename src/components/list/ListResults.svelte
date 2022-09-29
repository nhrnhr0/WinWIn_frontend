<script>
import CircularProgress from "@smui/circular-progress";
import Paper, { Title, Subtitle, Content } from "@smui/paper";
import Loading from "../Loading.svelte";
import ResultCard from "./ResultCard.svelte";
export let searchResults;
export let requesting;
</script>

<div class="results-wraper">
  <Paper>
    <Content>
      {#if requesting}
        <Loading />
      {:else if searchResults}
        {#each searchResults as entry}
          <!-- <ResultCard {entry} /> -->
          <!-- {JSON.stringify(entry)} -->
          <ResultCard {entry} />
        {/each}
      {:else}
        <Loading />
      {/if}
    </Content>
  </Paper>
</div>

<style lang="scss">
.results-wraper {
  max-width: 90%;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  width: auto;
  height: auto;
  :global(.smui-paper) {
    :global(.smui-paper__content) {
    }
  }
  :global(.smui-paper) {
    :global(.smui-paper__content) {
      display: grid;

      // 1 item per row
      grid-template-columns: 300px;

      grid-gap: 20px;
    }
  }
}
</style>
