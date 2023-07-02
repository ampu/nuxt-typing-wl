// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const {GH_PAGES} = process.env

export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: {
    enabled: true,
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
      hashMode: true,
    },
  },
  modules: [
    `@pinia/nuxt`,
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: `url`,
        svgo: false,
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "normalize.css/normalize.css";
            @import "@/assets/styles/variables";
            @import "@/assets/styles/functions";
            @import "@/assets/styles/mixins";
            @import "@/assets/styles/animations";
            @import "@/assets/styles/globals";
          `,
        }
      }
    }
  },
})
