// const CACHE_NAME = "version-1";
// const urlsToCache = [ 'index.html', 'offline.html' ];

// const self = this;

// // Install SW
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');

//                 return cache.addAll(urlsToCache);
//             })
//     )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
// event.waitUntil(
//    this.registration.showNotification("hello friend",{
//       body: "heloo test"
//    })
// )
//     if(!navigator.onLine){
//       event.respondWith(
//          caches.match(event.request)
//              .then(() => {
//                  return fetch(event.request) 
//                      .catch(() => caches.match('offline.html'))
//              })
//      )
//     }
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
            
//     )
// });








// // ggggg

let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                // '/static/js/main.chunk.js',
                // '/static/js/0.chunk.js',
                // '/static/js/bundle.js',
                // '/static/css/main.chunk.css',
                // '/bootstrap.min.css',
                '/index.html',
                '/',
                // "/users"
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 