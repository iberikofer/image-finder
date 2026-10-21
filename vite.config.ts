import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/image-finder/',
  plugins: [react(), tsconfigPaths()],
  envPrefix: ['VITE_', 'REACT_APP_'],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});