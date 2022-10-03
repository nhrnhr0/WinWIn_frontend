<script>
export let entry;
</script>

<div class="upper-buttons">
  <div class="content-fader">
    <div class="upper-buttons-scroll-box">
      <!-- {JSON.stringify(entry.contact_info)} -->
      {#if entry.contact_info}
        {#if entry.contact_info.phone}
          <a class="action-button" href="tel:{entry.contact_info.phone}">
            <button aria-labelledby="action-phone-label" class="action-circle">
              <svg
                height="20"
                width="20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="no-filter svg-icon sprite-icons"
                viewBox="0 0 44 44"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#FFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M33 27l-6 6-16-16 6-6L7 1 1 7c0 19.882 16.118 36 36 36l6-6-10-10h0z"
                />
              </svg>
            </button>
            <span id="action-phone-label" class="action-text">
              {entry.contact_info.phone}
            </span>
          </a>
        {/if}
        {#if entry.contact_info.menu}
          <a
            class="action-button"
            href={entry.contact_info.menu}
            target="_blank"
          >
            <button aria-labelledby="action-menu-label" class="action-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#FFF"
                  transform="translate(1 1)"
                >
                  <polygon points="0 0 11 3 22 0 22 17 11 20 0 17" />
                  <line x1="4" x2="8" y1="14" y2="15.1" />
                  <line x1="8" x2="4" y1="6.1" y2="5" />
                  <line x1="8" x2="4" y1="11" y2="10" />
                  <line x1="18" x2="14" y1="14" y2="15.1" />
                  <line x1="14" x2="18" y1="6.1" y2="5" />
                  <line x1="14" x2="18" y1="11" y2="10" />
                </g>
              </svg>
            </button>
            <span id="action-menu-label" class="action-text"> תפריט </span>
          </a>
        {/if}
        {#if entry.contact_info.website}
          <a
            class="action-button"
            href={entry.contact_info.website}
            target="_blank"
          >
            <button
              aria-labelledby="action-website-label"
              class="action-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#FFF"
                  transform="translate(1 1)"
                >
                  <polyline
                    points="3 7 3 19.7 9 19.7 9 14.7 13 14.7 13 19.7 19 19.7 19 7"
                  />
                  <polyline points="0 10 11 0 22 10" />
                  <rect width="4" height="4" x="9" y="7" />
                </g>
              </svg>
            </button>
            <span id="action-website-label" class="action-text">אתר הבית </span>
          </a>
        {/if}
        {#if entry.contact_info.facebook}
          <a
            class="action-button"
            href={entry.contact_info.facebook}
            target="_blank"
          >
            <button
              aria-labelledby="action-facebook-label"
              class="action-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  d="M0,6.61388889 L2.14232253,6.61388889 L2.14232253,4.605 C2.14232253,3.71833333 2.16535206,2.35166667 2.83205711,1.505 C3.53503368,0.608888889 4.49939547,0 6.1586735,0 C8.86176521,0 10,0.371666667 10,0.371666667 L9.46398756,3.43555556 C9.46398756,3.43555556 8.57159307,3.18555556 7.73849963,3.18555556 C6.90483045,3.18555556 6.1586735,3.47388889 6.1586735,4.27777778 L6.1586735,6.61388889 L9.57568081,6.61388889 L9.33732512,9.60611111 L6.1586735,9.60611111 L6.1586735,20 L2.14232253,20 L2.14232253,9.60611111 L0,9.60611111 L0,6.61388889"
                  transform="translate(1 1)"
                />
              </svg>
            </button>
            <span id="action-facebook-label" class="action-text">פייסבוק </span>
          </a>
        {/if}
        {#if entry.contact_info.instegram}
          <a
            class="action-button"
            href={entry.contact_info.instegram}
            target="_blank"
          >
            <button
              aria-labelledby="action-instegram-label"
              class="action-circle"
            >
              <img
                src="/instagram-icon.png"
                alt="instagram"
                width="29px"
                height="29px"
              />
            </button>
            <span id="action-instegram-label" class="action-text"
              >אינסטגרם
            </span>
          </a>
        {/if}
        {#if entry.contact_info.easy}
          <a
            class="action-button"
            href={entry.contact_info.easy}
            target="_blank"
          >
            <button aria-labelledby="action-easy-label" class="action-circle">
              <img src="/easy-icon.svg" alt="easy" width="29px" height="29px" />
            </button>
            <span id="action-easy-label" class="action-text">איזי </span>
          </a>
        {/if}
        {#if entry.contact_info.email}
          <a
            class="action-button"
            href="mailto:{entry.contact_info.email}"
            target="_blank"
          >
            <button aria-labelledby="action-email-label" class="action-circle">
              <img
                src="/email-icon.svg"
                alt="email"
                width="29px"
                height="29px"
              />
            </button>
            <span id="action-email-label" class="action-text">אימייל </span>
          </a>
        {/if}

        {#if entry.contact_info.twitter}
          <a
            class="action-button"
            href={entry.contact_info.twitter}
            target="_blank"
          >
            <button
              aria-labelledby="action-twitter-label"
              class="action-circle"
            >
              <img
                src="/twitter-icon.png"
                alt="twitter"
                width="29px"
                height="29px"
              />
            </button>
            <span id="action-twitter-label" class="action-text">twitter </span>
          </a>
        {/if}
      {/if}
    </div>
  </div>
  {@html entry?.description}
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

    border-top: 1px solid #e7ecee;
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
      color: black;
      text-decoration: none;
      font-weight: 600;
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
        color: black;
        text-decoration: none;
        //font-weight: 700;
        font-weight: normal;
      }

      &:hover {
        .action-circle {
          background-color: #1e6ac7;
          img,
          svg {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
