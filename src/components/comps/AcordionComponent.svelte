<script>
import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
import IconButton, { Icon } from "@smui/icon-button";
import { onMount } from "svelte";

let panel1Open = false;
let panel2Open = false;
let panel3Open = false;
let panel4Open = false;
export let arr;
export let header_key = "question";
export let content_key = "answer";
let arr_states = [];
onMount(() => {
  arr_states = [];
  arr.forEach((element) => {
    arr_states.push(false);
  });
});
</script>

<div class="accordion-container">
  <Accordion multiple>
    {#each arr as item, index}
      <Panel bind:open={arr_states[index]}>
        <Header>
          {item[header_key]}
          <span slot="description">{item[content_key]}</span>
          <IconButton slot="icon" toggle pressed={arr_states[index]}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
        </Header>
        <Content>
          {item[content_key]}
        </Content>
      </Panel>
    {/each}

    <!-- <Panel bind:open={panel1Open}>
      <Header>
        Panel 1
        <IconButton slot="icon" toggle pressed={panel1Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel bind:open={panel2Open}>
      <Header>
        Panel 2
        <IconButton slot="icon" toggle pressed={panel2Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel bind:open={panel3Open}>
      <Header>
        Panel 3
        <span slot="description">Description of panel 3.</span>
        <IconButton slot="icon" toggle pressed={panel3Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel bind:open={panel4Open}>
      <Header>
        Panel 4
        <span slot="description">Description of panel 4.</span>
        <IconButton slot="icon" toggle pressed={panel4Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel> -->
  </Accordion>
</div>

<style lang="scss">
.accordion-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 150px;
}
</style>
