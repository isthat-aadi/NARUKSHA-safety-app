const CACHE_NAME = 'naruksha-v3';

// List of files to cache for offline use
const assets = [
    './',
    './index.html',
    './manifest.json',
    './icon.png'
];

// 1. INSTALL EVENT: Cache files and force the new worker to take over instantly
self.addEventListener('install', (event) => {
    self.skipWaiting(); // <--- MAGIC LINE 1: Bypasses the "waiting" phase
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching app assets for offline use');
            return cache.addAll(assets).catch(err => console.log('Asset caching failed:', err));
        })
    );
});

// 2. ACTIVATE EVENT: Delete old caches (v1, v2) and take control of the app
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // <--- MAGIC LINE 2: Forces clients to use the new cache now
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Clearing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 3. FETCH EVENT: How the app gets data (Network first for HTML, then Cache)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // If the network works, return the fresh data
                return networkResponse;
            })
            .catch(() => {
                // If offline, return the cached version
                return caches.match(event.request);
            })
    );
});
