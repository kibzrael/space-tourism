// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  css: ["@/assets/css/styles.scss"],
  app: {
    head: {
      title: "Frontend Mentor | Space tourism website",
      meta: [],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
  },
};
