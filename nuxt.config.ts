// https://nuxt.com/docs/api/configuration/nuxt-config
const {GH_PAGES} = process.env

export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: {
    enabled: true,
  },
  appConfig: {
    apiBaseURL: GH_PAGES ? `https://akimutin-typing.vercel.app` : undefined
  },
  components: [
    `~/components`,
  ],
  imports: {
    autoImport: true,
  },
  app: {
    cdnURL: GH_PAGES ? `https://ampu.github.io/nuxt-typing-wl/` : undefined,
    baseURL: GH_PAGES ? `/nuxt-typing-wl/` : undefined,
  },
  router: {
    options: {
      hashMode: false,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "normalize.css/normalize.css";
            @import "@/assets/styles/variables";
            @import "@/assets/styles/globals";
          `,
        }
      }
    }
  },
})
