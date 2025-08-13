// Service Worker for Portfolio Website
const CACHE_NAME = 'khalid-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/assets/profile.jpg',
  '/assets/favicon.ico',
  '/assets/Khalid Resume .pdf',
  '/assets/about-illustration.jpg',
  '/assets/hero-project.jpg',
  '/assets/maruti-project.jpg',
  '/assets/analytics-icon.jpg',
  '/assets/marketing-icon.jpg',
  '/assets/crm-icon.jpg',
  '/assets/creative-icon.jpg',
  '/assets/contact-illustration.jpg',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.js'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // For images, try network first, then cache
        if (event.request.destination === 'image') {
          return fetch(event.request)
            .then(networkResponse => {
              // Cache the fresh image
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
              return networkResponse;
            })
            .catch(() => {
              // If network fails, return cached version
              return response;
            });
        }
        // For other resources, return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 