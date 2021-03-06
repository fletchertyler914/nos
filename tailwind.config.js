'use strict';

module.exports = {
  mode: 'jit',
  content: [
    './apps/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
    './libs/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
  ],
  // PurgeCSS options
  // Reference: https://purgecss.com/
  //enable: production, // disable purge in dev
  options: {
    rejected: true,
    printRejected: true,
    safelist: ['html', 'body', 'dark'],
    safelistPatterns: [/svelte-/],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
