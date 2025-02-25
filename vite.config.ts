// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  build: {
    outDir: 'dist', // Spécifie le dossier de sortie
  },
  plugins: [
    // ... autres plugins
  ],
});

