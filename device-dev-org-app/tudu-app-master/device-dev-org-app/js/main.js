if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed'));
}
self.addEventListener('fetch', (event) => {
  const request = event.request;
  event.respondWith(cacheFirst(request));
});


async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}
