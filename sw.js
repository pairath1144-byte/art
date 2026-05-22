const CACHE='sako-supervision-v1';
const FILES=['./','./index.html','./manifest.json','./assets/logo.jpeg','./assets/director_blue.jpeg','./assets/supervisor_black.jpeg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
