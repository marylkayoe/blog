import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [sveltePreprocess(), mdsvex({ extensions: ['.md'] })],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
  },
};

export default config;