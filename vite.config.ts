// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hariharanursery/', // 🔥 Your repo name
  build: {
    outDir: 'docs', // 🔥 Output folder GitHub Pages uses
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
