import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [solidPlugin(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SolidAnimateCss',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        globals: {
          'solid-js': 'Solid'
        }
      }
    }
  }
});