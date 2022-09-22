<!--

    example entry:
    {"id":"business-2","name":"הום זול","lat":"31.31755369999999","lng":"34.6265623","location":null,"address":"ז'בוטינסקי 22, אופקים, ישראל","description":"המתחם מציע מגוון ענק של מוצרים לשיפור וטיפוח הבית בתחומים: צבע, כלי עבודה, מוצרי חשמל, מקררים וטלוויזיות, תצוגת תאורה, תצוגת מקלחות וסניטריה, אינסטלציה, אביזרי אמבטיה, אביזרי חשמל, אלקטרוניקה ביתית, ריהוט לבית ולגן, מחלקת נוי עשירה, כלי בית, טקסטיל, מצלמות אבטחה, סוכות ועוד אלפי מוצרים לבית ולגינה.","createdAt":"2022-09-20T12:39:33.966Z","updatedAt":"2022-09-20T12:47:19.458Z","publishedAt":"2022-09-20T12:39:57.546Z","contact_info":{"id":2,"email":null,"phone":" 08-6847020","website":"https://homezol.co.il/","facebook":"https://www.facebook.com/homezol","twitter":null,"linkedIn":null,"instegram":"https://www.instagram.com/homezol/","easy":"https://easy.co.il/page/10012140","youtube":null,"menu":null},"main_image":{"id":4,"name":"logo.png","alternativeText":"logo.png","caption":"logo.png","width":140,"height":45,"formats":null,"hash":"logo_9edf493e9b","ext":".png","mime":"image/png","size":0.75,"url":"/uploads/logo_9edf493e9b.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2022-09-20T12:39:22.495Z","updatedAt":"2022-09-20T12:39:22.495Z"},"images":null,"opening_hours":{"id":1,"sunday_open":null,"sunday_close":null,"monday_open":null,"monday_close":null,"tuesday_open":null,"tuesday_close":null,"wednesday_open":null,"wednesday_close":null,"thursday_open":null,"thursday_close":null,"friday_open":null,"friday_close":null,"saturday_open":null,"saturday_close":null},"institutions":[{"id":1,"name":"אגודת צער בעלי חיים בישראל","lat":"32.0467013","lng":"34.7692025","location":null,"description":"אגודת צער בעלי חיים בישראל היא בעלת הזכויות למרבית החומרים הטקסטואליים והוויזואליים המופיעים באתר. במקרים אחרים ניתנו קרדיטים מתאימים. האגודה מתנצלת על כל השמטה של קרדיט, ככל שקיימת, שנעשתה בתום לב, ותתקן אותה באם תובא לידיעתה.","address":"הרצל 159, תל אביב, ישראל","createdAt":"2022-09-20T12:44:28.365Z","updatedAt":"2022-09-20T12:44:38.004Z","publishedAt":"2022-09-20T12:44:37.999Z"}],"frequently_asked_questions":[],"business_categories":[{"id":1,"name":"חנות כלבו","createdAt":"2022-09-20T12:45:42.386Z","updatedAt":"2022-09-20T12:52:55.167Z","publishedAt":"2022-09-20T12:46:44.563Z"},{"id":2,"name":"חנות רהיטים","createdAt":"2022-09-20T12:45:48.844Z","updatedAt":"2022-09-20T12:53:17.316Z","publishedAt":"2022-09-20T12:46:50.244Z"},{"id":3,"name":"טמבוריה","createdAt":"2022-09-20T12:45:55.848Z","updatedAt":"2022-09-20T12:53:32.887Z","publishedAt":"2022-09-20T12:46:52.415Z"},{"id":4,"name":"חנות חשמל ואלקטרוניקה","createdAt":"2022-09-20T12:46:04.598Z","updatedAt":"2022-09-20T12:52:43.029Z","publishedAt":"2022-09-20T12:46:41.979Z"},{"id":5,"name":"חנות חומרי בניין","createdAt":"2022-09-20T12:46:11.489Z","updatedAt":"2022-09-20T12:52:30.385Z","publishedAt":"2022-09-20T12:46:39.369Z"},{"id":6,"name":"שכפול מפתחות","createdAt":"2022-09-20T12:46:17.016Z","updatedAt":"2022-09-20T12:55:22.074Z","publishedAt":"2022-09-20T12:46:54.678Z"},{"id":7,"name":"חנות מוצרי חשמל","createdAt":"2022-09-20T12:46:23.668Z","updatedAt":"2022-09-20T12:53:03.286Z","publishedAt":"2022-09-20T12:46:47.426Z"}]}
-->
<script>
import Card, { Content, PrimaryAction, Media, MediaContent } from "@smui/card";
import { BACKEND_MEDIA_URL } from "../../utils/consts";

function get_top_categories() {
  if (entry.id.startsWith("business")) {
    // get the first 3 entry.business_categories
    return entry.business_categories?.slice(0, 3).map((cat) => cat.name) || [];
  } else if (entry.id.startsWith("institution")) {
    // get the first 3 entry.product_categories
    return (
      entry.institution_categories?.slice(0, 3).map((cat) => cat.name) || []
    );
  }
}

export let entry;
function elipses(str, max = 75) {
  if (str) {
    let ret = str.length > max ? str.slice(0, max - 3) + "..." : str;
    if (ret.length !== max) {
      // add the end with spaces
      let spaces = max - ret.length;
      ret = ret.padEnd(spaces + ret.length, " ");
    }
    return ret;
  } else {
    return "";
  }
}

function get_avatars() {
  if (entry.id.startsWith("business")) {
    return entry.institutions;
  } else if (entry.id.startsWith("institution")) {
    return entry.businesses;
  }
}
</script>

<!-- data-src={BACKEND_MEDIA_URL + entry?.image} -->
<div
  class="content-wraper"
  style={"--background: url(" +
    BACKEND_MEDIA_URL +
    entry?.main_image?.url +
    ");"}
>
  <Card>
    <div style="padding: 1rem;">
      <h2 class="mdc-typography--headline6" style="margin: 0;">
        {entry.name}
      </h2>
      <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
        <div class="categories">
          {#each get_top_categories() as cat}
            <div class="category">
              {cat}
            </div>
          {/each}
        </div>
      </h3>
    </div>
    <PrimaryAction>
      <Media class="card-media-16x9" aspectRatio="16x9" />
      <div class="avatars">
        {#each get_avatars() as avatar}
          <img
            data-src={JSON.stringify(avatar)}
            src={BACKEND_MEDIA_URL + avatar.url}
            alt="avatar"
            title={avatar.name}
          />
        {/each}
      </div>

      <Content style="color: #888;">{entry.description || ""}</Content>
    </PrimaryAction>
    <!-- <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #black; position: absolute; bottom: 16px; right: 16px; margin: 0;"
        >
          
        </h2>
      </MediaContent>
    </Media> -->
  </Card>
</div>

<style lang="scss">
.avatar {
  display: "inline-block";
  border: "2px solid white";
  &:not(:first-of-type) {
    //margin-left: -muiBaseTheme.spacing.unit;
  }
}
:global(.card-media-16x9) {
  background-image: var(--background);
  background-size: cover;
  background-position: center;
  max-width: 100%;
  .mdc-typography--headline6 {
    transition: cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.2s;
    width: 100%;
    line-height: 2.5;
  }

  &:hover {
    .mdc-typography--headline6 {
      color: #fff;
      background-color: #000;
    }
  }
}
:global(.smui-card__content) {
  line-height: 2;
  padding: 16px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  .category {
    background-color: #888;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
