import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
      },
    }),
  ],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
});
