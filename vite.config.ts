import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/costume-project/", // ← リポジトリ名が違うならここだけ変更
});