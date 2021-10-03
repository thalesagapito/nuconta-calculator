import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  optimizeDeps: {
    include: ['@vueuse/core'],
    exclude: ['vue-demi'],
  },
  plugins: [
    vue(),
  ],
})
