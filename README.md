# Andre Madiz Team – Portfolio PWA

> A **React + Vite** Progressive Web App built with TypeScript that showcases André Madiz’ work.
> The project is hosted on a **secure (HTTPS)** base path `/andremadizcgteam/` and can be installed on Android/
iOS devices.

---

## 📚 Table of Contents

| Section | Description |
|---------|-------------|
| [Features](#-features) | What the app does |
| [Tech Stack](#-tech-stack) | Libraries & tools |
| [Quick Start](#-quick-start) | Run it locally |
| [Development](#-development) | Hot‑reload, linting, tests |
| [Build & Deploy](#-build--deploy) | Production bundle |
| [PWA Configuration](#-pwa-configuration) | Manifest, service‑worker, install prompt |
| [Troubleshooting](#-troubleshooting) | Common pitfalls |
| [Contributing](#-contributing) | How to help |
| [License](#-license) | Legal stuff |

---

## 🚀 Features

| ✅ | Feature |
|----|---------|
| 🎯 | **Single‑page SPA** with `react-router` and a `basename` of `/andremadizcgteam/` |
| ⚡ | **Fast build** – Vite + TypeScript, 100 % ESM |
| 📐 | **Responsive design** – works on mobile, tablet & desktop |
| 🌱 | **Progressive Web App** – can be installed to the home screen |
| 🔒 | Served over **HTTPS** – installable on Android & iOS |
| 🎨 | Custom `manifest.webmanifest` (icons, name, description) |
| 🛠 | Service‑worker with offline support (cache‑first strategy for static assets) |
| 🧪 | Jest + React Testing Library ready (tests are a stub‑out – add as you wish) |
| 🔄 | Automatic **precache** & **runtime caching** via `vite-plugin-pwa` |
| 📦 | Build output in `dist/andremadizcgteam/` – ready for any static host |

---

## 🛠 Tech Stack

| Library | Purpose |
|---------|---------|
| **React** 18 | UI |
| **React Router DOM** 6 | Client‑side navigation |
| **TypeScript** 4.x | Static typing |
| **Vite** 4.x | Fast dev server & Rollup build |
| **vite-plugin-pwa** | PWA support (manifest, service‑worker, offline) |
| **ESLint** | Linting |
| **Prettier** | Code formatting |
| **Jest / React Testing Library** | Unit tests (optional) |

> **Why `basename: "/andremadizcgteam/"`?**
> The app is served from a sub‑path on a static host (e.g. Netlify, GitHub Pages).
> Setting the `basename` ensures all internal routes resolve correctly without `404`s after a hard reload or on a
phone.

---

## 🏁 Quick Start

```bash
# 1️⃣ Clone the repo
git clone https://github.com/your-username/andre-madiz-team.git
cd andre-madiz-team

# 2️⃣ Install dependencies
npm install   # or `yarn` / `pnpm`

# 3️⃣ Run the dev server
npm run dev   # opens http://localhost:5173 (dev is HTTP only)
```

> **Tip:** When testing the PWA on a phone, you’ll need the **HTTPS** URL that points to the `/andremadizcgteam/`
base path.
> E.g. `https://your-site.com/andremadizcgteam/`.
> You can either deploy to a real host or run Vite with HTTPS locally (see below).

---

## 👨‍💻 Development

| Command | What it does |
|---------|--------------|
| `npm run dev` | Starts Vite dev server (hot‑reload, dev console) |
| `npm run lint` | Runs ESLint + Prettier |
| `npm test` | Runs Jest tests (default jest config) |

**Environment Variables** – none required for dev; production values are hard‑coded in `src/manifest.webmanifest`.

If you need to change the base URL, modify the `basename` in `src/App.tsx` and update the `rootDir` in
`vite.config.ts`.

---

## 📦 Build & Deploy

```bash
# Build a production bundle
npm run build
```

The output is placed in:

```
dist/
  andremadizcgteam/
    index.html
    assets/
    sw.js          ← service‑worker
    manifest.webmanifest
```

### Deploy to a static host

1. **Netlify**
   - Drag‑and‑drop the `dist/andremadizcgteam/` folder into the Netlify UI.
   - Make sure the site is served over **HTTPS**.
   - Set the *base path* to `/andremadizcgteam/` (Netlify’s “build output folder” defaults to `dist` – you’ll need
to point to the sub‑folder).

2. **GitHub Pages**
   ```bash
   git subtree push --prefix dist/andremadizcgteam origin gh-pages
   ```
   Ensure `CNAME` contains `your-site.com` and that the page is reachable via
`https://your-site.com/andremadizcgteam/`.

3. **Vercel / Fly.io / Render** – all accept the same `dist/andremadizcgteam/` folder; just point the root to that
sub‑folder.

> **Important:** The hosting URL must be **HTTPS** – otherwise the “Add to Home Screen” prompt will never fire on
a phone.

---

## 🌐 PWA Configuration

### `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',           // auto‑update SW when a new build is deployed
      manifest: {
        name: 'Andre Madiz Team',
        short_name: 'Madiz',
        description: 'Portfolio of André Madiz – available as a PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/andremadizcgteam/',
        scope: '/andremadizcgteam/',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-host\.com\/andremadizcgteam\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  root: 'src',
  base: '/andremadizcgteam/',
});
```

### `manifest.webmanifest`

```json
{
  "name": "Andre Madiz Team",
  "short_name": "Madiz",
  "description": "Portfolio of André Madiz – available as a PWA",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/andremadizcgteam/",
  "scope": "/andremadizcgteam/",
  "icons": [
    {
      "src": "android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

### Why `start_url` & `scope` matter

* `start_url` tells the OS where to open the app when launched from the home screen.
* `scope` limits navigation to the same sub‑path (`/andremadizcgteam/`).
* Together they prevent double‑loading of your main `index.html` when the user opens the app from the home screen
or from an external link.

---

## 🐛 Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| “Add to Home Screen” never shows on Android | Site is served over **HTTP** or **localhost** | Deploy to a secure
(HTTPS) host, or run Vite with HTTPS locally (`vite --https`) |
| Console error: `ServiceWorker registration failed` | Wrong `base` path or SW file missing | Ensure
`vite-plugin-pwa` is in `vite.config.ts` and that `sw.js` is in `dist/andremadizcgteam/` |
| “Manifest is not installable” | Manifest file not found or bad MIME type | Verify `<link rel="manifest">` points
to a 200 OK file served as `application/manifest+json` |
| 404 on images or icons | Assets are in the wrong folder | Check that `android-chrome-192x192.png` etc. are
emitted into `dist/andremadizcgteam/` |
| Install prompt appears but the app uninstalls after closing | Cache strategy too aggressive | Adjust
`workbox.runtimeCaching` or add `skipWaiting()` in the SW |

**Testing on a phone**
1. Open the HTTPS URL in Chrome (Android) or Safari (iOS).
2. Tap the three‑dots → *Inspect* → **Console** to confirm “This page is served over a secure origin”.
3. In the **Application** tab, verify the Service Worker is **activated**.
4. After a couple of reloads, the three‑dots menu should show **“Add to Home Screen”**.

---

## 🤝 Contributing

Pull requests are welcome!
Please follow these guidelines:

1. **Fork** the repo and create a feature branch.
2. Run `npm run lint` – make sure no lint errors appear.
3. Write or update tests if you add new functionality.
4. **Open a PR** – include a clear description of the change and why it matters.

---

## 📄 License

MIT – feel free to reuse the code or modify it for your own portfolio.
