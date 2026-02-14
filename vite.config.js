
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/png_group/',
  css: {
    preprocessorOptions: {
        scss: {
            silenceDeprecations: ["color-functions", "global-builtin", "import","if-function"],
        },
    },
},
})
