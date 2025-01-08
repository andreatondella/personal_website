import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel"; // Change to Vercel adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex()],

    kit: {
        adapter: adapter() // Use the Vercel adapter
    },

    extensions: [".svelte", ".svx"]
};

export default config;
