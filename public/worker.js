let CACHE_NAME = "AhmadulloPWA";
let filesToCache = ["index.html", "offline.html"];


// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => caches.match('offline.html'));
        })
    );
})
