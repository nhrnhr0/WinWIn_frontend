<script>
import Button, { Label } from "@smui/button";
import IconButton, { Icon } from "@smui/icon-button";

export let on_click;
export let data;
</script>

<h3>קטגוריות</h3>
<div class="wraper">
  {#each data as cat}
    <Button
      on:click={(e) => {
        on_click(e, cat);
      }}
      variant="outlined"
      class="button-shaped-round"
    >
      <Icon class="material-icons">open_in_new</Icon>
      <Label>{cat}</Label>
    </Button>
  {/each}
</div>

<style lang="scss">
h3 {
  text-align: center;
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  text-decoration: underline;
}
.wraper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  :global(.button-shaped-round) {
    margin: 7px;
    padding: 7px;
    border-radius: 12px;
    :global(.mdc-button__label) {
    }
  }
}
</style>
