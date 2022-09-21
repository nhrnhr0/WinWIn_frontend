import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
//import postcss from "rollup-plugin-postcss";
const production = !process.env.ROLLUP_WATCH;

const config = {
  plugins: [
	/*postcss({
      extract: "public/material.css",
      minimize: production,
      use: [
        ["sass", {
          includePaths: [
            // styles folder contains the necessary "_smui-theme.scss" file.
            "./src/styles",
            "./node_modules",
          ]
        }]
      ],
    }),*/
	sveltekit()],

  resolve: {
    alias: {
      src: path.resolve("./src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
};

export default config;
