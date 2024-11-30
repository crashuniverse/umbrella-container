import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        // TODO: uncomment for local development
        // umbrella_research: 'http://localhost:4173/assets/remoteEntry.js',
        umbrella_research: {
          external: 'https://heartfelt-florentine-0b131c.netlify.app/assets/remoteEntry.js',
        },
      },
      shared: [],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
