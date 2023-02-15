import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // making the path relative to its deployment directory
  base: '',
  plugins: [react()]
});
