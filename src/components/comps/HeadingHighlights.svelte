<script>
export let cats;
</script>

<div class="highlights">
  {#if cats}
    {#each cats as cat}
      <div class="cat">
        {cat.attributes.name}
      </div>
    {/each}
    <span class="final-space" />
  {/if}
</div>

<style lang="scss">
.highlights {
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  margin: 4px 0 0;
  color: #454545;
  // overflow auto / scroll
  max-width: 100%;
  overflow: auto; // margin-left: 55px;
  //set horizontal scroll bar width to 0
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 34em) {
    justify-content: flex-start;
    margin: 4px -8px 0 0;
  }
  > div.cat {
    position: relative;
    margin: 0 10px 0 8px;
    // text in one line
    white-space: nowrap;

    &::before {
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
  .final-space {
    margin-left: 150px;
  }
}
</style>
