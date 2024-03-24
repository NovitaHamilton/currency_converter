import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://currency-converter-1u4o.onrender.com', // Adjust this based on your server configuration
        changeOrigin: true,
      },
    },
  },
});
