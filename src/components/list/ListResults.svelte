<script>
import CircularProgress from "@smui/circular-progress";
import Paper, { Title, Subtitle, Content } from "@smui/paper";
import Loading from "../Loading.svelte";
export let searchResults;
export let requesting;
</script>

<div class="results-wraper">
  <Paper>
    <Content>
      {#if requesting}
        <Loading />
      {:else if searchResults}
        {JSON.stringify(searchResults)}
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
}
</style>
