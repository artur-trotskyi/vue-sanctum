import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    proxy: {
      '/api/jobs': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api/auth': {
        target: 'http://laravel-sanctum-vue.local',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/sanctum/csrf-cookie': {
        target: 'http://laravel-sanctum-vue.local',
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: ['laravel-sanctum-vue.local', 'localhost']
  }
})
