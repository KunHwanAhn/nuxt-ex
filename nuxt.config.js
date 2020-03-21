export default {
  srcDir: 'src/',
  server: {
    host: '0.0.0.0',
  },
  plugins: [],
  head: {
    meta: [
      {
        property: 'og:title',
        content: 'Nuxt.js Sample Page',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: 'My first Nuxt.js sample page',
      },
    ],
  },
};
