// vite.config.ts
import { defineConfig } from 'vite';
import ViteStyleImport from 'vite-plugin-style-import';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/IteRated-Ignition/' : '/',
  build: {
    outDir: 'dist', // Dossier de sortie
  },
  plugins: [
    ViteStyleImport({
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      // Les autres options que vous souhaitez configurer
    }),
    // ... autres plugins
  ],
  // Autres configurations
});

