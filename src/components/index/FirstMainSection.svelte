<script>
import Button from "@smui/button";
export let data;
</script>

<!-- show 3 buttons: עסקים, כל העסקים והעמותות, עמותות-->
<main>
  <div class="wraper">
    <h1>{data.subtitle}</h1>
    <div class="button-wraper">
      <Button variant="raised">
        <img
          src="https://img.icons8.com/ios/50/000000/business.png"
          alt="עסקים"
        />
        עסקים</Button
      >
      <Button variant="raised">כל העסקים והעמותות</Button>
      <Button variant="raised">
        <img
          src="https://img.icons8.com/ios/50/000000/charity.png"
          alt="עמותות"
        />
        עמותות
      </Button>
    </div>
    <!-- SHOW ABOUNT SECTION -->
  </div>
</main>

<style lang="scss">
main {
  position: absolute;
  width: 100%;
  transform: translate(0%, -110%);
  .wraper {
    width: 80%;
    margin: auto;
    background-color: var(--surface);
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    .button-wraper {
      margin: auto;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 80%;
      margin-top: 20px;
      margin-bottom: 20px;

      :global(.mdc-button) {
        margin: 0 1rem;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background-color: var(--primary);
        color: var(--on-primary);
        :global(.mdc-button__label) {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }
  }
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
  color: var(--primary);
  text-align: center;
  //background: var(--surface);
}
</style>
