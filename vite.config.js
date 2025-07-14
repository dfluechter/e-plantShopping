import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 
export default defineConfig({
  base: '/dfluechter/e-plantShopping/',
  plugins: [react()],
});
