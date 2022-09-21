import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // https://dev.to/willkre/render-markdown-from-a-string-in-svelte-mdsvex-sveltekit-1597
  extensions: [".svelte"],

  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
