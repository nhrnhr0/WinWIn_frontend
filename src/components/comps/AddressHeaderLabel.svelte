<script>
export let address;
</script>

<div class="address">
  <span class="address-text">
    {address}
  </span>
</div>

<style lang="scss">
.address {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  margin: 8px 0 0;
  @media screen and (min-width: 34em) {
    justify-content: flex-start;
  }

  .address-text {
    font-size: 1rem;
    color: #757575;
  }
}
</style>
