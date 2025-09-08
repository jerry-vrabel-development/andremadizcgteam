import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      /** ----------  PWA runtime ---------- */
      registerType: "prompt",
      injectRegister: "auto",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
      ],

      /** ----------  Workbox ---------- */
      workbox: {
        clientsClaim: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jerry-vrabel-development.github.io\/andremadizcgteam\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "andremadizcgteam",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30days
              },
            },
          },
          {
            urlPattern: /^https:\/\/jerry-vrabel-development.github.io\/andremadizcgteam\/api/,
            handler: "StaleWhileRevalidate",
            options: { cacheName: "api-cache" },
          },
        ],
      },

      /** ----------  Manifest ---------- */
      manifest: {
        name: "Andre Madiz Team",
        short_name: "Andre Madiz Team",
        description: "Come Train With The Best.",
        theme_color: "#ffffff",
        display: "standalone",
        start_url: "/andremadizcgteam/",
        scope: "/andremadizcgteam/",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      /** ----------  Dev options ---------- */
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "/",
      },
    }),
  ],

  /** ----------  Vite root & base ---------- */
  base: "/andremadizcgteam/",
});
