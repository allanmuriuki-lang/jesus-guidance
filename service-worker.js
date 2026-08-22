/* ============================================================
   service-worker.js
   Caches the app shell so "A Word For You" keeps working offline
   after the first visit. No backend, no external dependencies
   required to function (Google Fonts are cached best-effort).
============================================================ */

const CACHE_NAME = "awfy-cache-v1";

// Paths are relative to this file's location, so this works
// whether the app is hosted at the domain root or in a
// GitHub Pages sub-path like /my-repo/.
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data/scripture-data.js",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // App shell: cache-first, so the app opens instantly and works offline.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Cache successful same-origin responses for next time.
          if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          // Offline and not cached: fall back to the home page for navigations.
          if (req.mode === "navigate") return caches.match("./index.html");
          return new Response("", { status: 408, statusText: "Offline" });
        });
    })
  );
});
