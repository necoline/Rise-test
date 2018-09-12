// Set this to true for production
// const doCache = false;

// Name our cache
const CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
// self.addEventListener("activate", event => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys()
//       .then(keyList =>
//         Promise.all(keyList.map(key => {
//           if (!cacheWhitelist.includes(key)) {
//             console.log('Deleting cache: ',  key)
//             return caches.delete(key);
//           }
//         }))
//       )
//   );
// });

self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll([
          '/',
          '/index.html',
          '/index.html?homescreen=1',
          '/?homescreen=1',
          '/public/stylesheet/app.scss'
        //   '/scripts/main.min.js'
        ]))
    );
   });



// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
// self.addEventListener('fetch', (event) => {
//     if (doCache) {
//       event.respondWith(
//           caches.match(event.request).then((response) => response || fetch(event.request))
//       );
//     }
// });


self.addEventListener('fetch', (event) => {

    console.log(event.request.url);
    
    // Tells the browser to evaluate the result of the event in the future
    event.respondWith(
    
    // Takes the current web request that triggered the fetch event and looks in the cache for a resource that matches
    caches.match(event.request).then((response) => response || fetch(event.request))
    
    
    );
    
    });