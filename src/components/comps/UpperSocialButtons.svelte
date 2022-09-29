<div class="upper-buttons">
  <div class="content-fader">
    <div class="upper-buttons-scroll-box">
      <div class="action-button">
        <!-- action-phone-label -->
        <button aria-labelledby="action-map-label" class="action-circle"
          ><svg
            height="20"
            width="20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="no-filter svg-icon sprite-icons"
            viewBox="0 0 41 41"
            ><path
              fill="none"
              stroke="#FFF"
              stroke-linecap="round"
              stroke-width="2"
              d="M38 12L2 2l10 36 8-18z"
            />
          </svg></button
        >
        <span id="action-map-label"> ניווט </span>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
.upper-buttons {
  position: relative;
  margin-top: 0;
  @media screen and (min-width: 34em) {
    flex-wrap: nowrap;
    margin-top: 40px;
    padding: 0 20px 10px 0;
    background-color: #f7f7f7;
    background-color: var(--color-gray-lighter);
    border-top: 1px solid #e7ecee;
    border-top: 1px solid var(--color-gray-border);
  }

  .content-fader {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  .upper-buttons-scroll-box {
    padding-left: 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding-bottom: 16px;

    overflow-x: auto;
    overflow-y: hidden;
    direction: rtl;

    @media screen and (max-width: 49.9375em) {
      flex-wrap: nowrap;
      margin: -28px -10px 0 0;
    }
    .action-button {
      margin-right: 0;
      margin-left: 8px;
      position: relative;
      min-width: 77px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 auto;
      margin: 0 0 0 8px;
      cursor: pointer;
      button.action-circle {
        -webkit-appearance: none;
        background-color: transparent;
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #2375d3;

        box-shadow: 0 2px 4px 2px rgb(0 0 0 / 10%);
      }
      .action-text {
        margin-top: 8px;
        font-size: 0.875rem;
        white-space: nowrap;
      }
    }
  }
}
</style>
