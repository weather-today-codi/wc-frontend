import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      useCredentials: true,
      includeAssets: ["robots.txt", "WC192.png", "WC64.png", "WC512.png"],
      manifest: {
        short_name: "앱코",
        name: "웨덜코디",
        start_url: "",
        description: "날씨에 따라 옷을 코디해주는 앱이에요.",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "icons/WC64.png",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
          {
            src: "icons/WC192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "icons/WC512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    sourcemap: false,
  },
});
