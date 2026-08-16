const CACHE_NAME = 'lovobar-training-v18';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    'https://unpkg.com/@phosphor-icons/web',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
];

// Instalación del Service Worker y Caché inicial
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache abierta');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Interceptar peticiones (Fetch)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Si el asset está en caché, lo devolvemos
                if (response) {
                    return response;
                }
                
                // Si no, lo pedimos a la red
                return fetch(event.request).then(
                    (networkResponse) => {
                        // Comprobar si recibimos una respuesta válida
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clonar la respuesta para guardarla en caché (opcional) y devolverla
                        let responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                // No cachear recursos de otros dominios (como las fuentes si fallan) si no queremos problemas de CORS
                                if(event.request.url.indexOf('http') === 0) {
                                    cache.put(event.request, responseToCache);
                                }
                            });

                        return networkResponse;
                    }
                );
            })
    );
});

// Limpieza de cachés antiguas en la activación
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});
