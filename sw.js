const CACHE = 'lilly-v1';
const ASSETS = [
  '/Asistente_hogar_LRV/',
  '/Asistente_hogar_LRV/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
