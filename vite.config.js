import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👉 Hier den Repo-Namen einfügen
export default defineConfig({
  base: '/DEIN_REPO_NAME/',  // Beispiel: '/paradise-nursery/'
  plugins: [react()],
});
