// vite.config.ts
import { defineConfig } from 'vite';
import ViteStyleImport from 'vite-plugin-style-import';

export default defineConfig({
  base: "./",
  build: {
    outDir: 'dist', // Spécifie le dossier de sortie
  },
  plugins: [
    ViteStyleImport({
      // Options du plugin
      // Exemple d'options :
      include: ['**/*.css'], // Inclure tous les fichiers CSS
    }),
    // ... autres plugins
  ],
});

