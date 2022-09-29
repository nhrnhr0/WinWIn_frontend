<script>
export let cats;
</script>

<div class="highlights">
  {#if cats}
    {#each cats as cat}
      <span class="cat">
        {cat.attributes.name}
      </span>
    {/each}
  {/if}
</div>

<style lang="scss">
.highlights {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin: 4px 0 0;
  color: #454545;
  @media screen and (min-width: 34em) {
    justify-content: flex-start;
    margin: 4px -8px 0 0;
  }
  > span {
    position: relative;
    margin: 0 10px 0 8px;
    &::after {
      top: 50%;
      right: auto;
      bottom: auto;
      left: -12px;
      content: "";
      position: absolute;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #a8a8a8;
    }
  }
}
</style>
