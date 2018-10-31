// The cache's name (should just be your app's name)
const cacheName = 'tudu-app';

// Files that must load for the app to be operational
const staticAssets =
['./', './js/main.js',
'./css/main.css',
'./css/reset.css'];

// Cache the main files on install
self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});
