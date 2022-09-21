<script>
import About from "../components/index/About.svelte";
import FirstMainSection from "../components/index/FirstMainSection.svelte";
import Hero from "../components/index/Hero.svelte";
export let data;
</script>

<svelte:head>
  <title>{data?.title}</title>
</svelte:head>
<Hero {data} />
<FirstMainSection {data} />
<About {data} />
