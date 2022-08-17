import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.allorigins\.win\/get\?url=https/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'itunesApi',
              expiration: {
                maxAgeSeconds: 86400 //un dia en segundos
              },
              cacheableResponse: {
                statuses: [200]
              }
            }
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts'
  },
  server: {
    open: true,
    port: 3000
  },
  preview: {
    port: 3001
  }
});
