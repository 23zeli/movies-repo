import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movies-repo/",
  server : {
    open: true,
    port: 3001,
  },
});


