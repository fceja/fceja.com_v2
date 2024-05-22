import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/ts/components"),
      "@pages": path.resolve(__dirname, "./src/ts/pages"),
      "@scss": path.resolve(__dirname, "./src/scss"),
    }
  }
});
