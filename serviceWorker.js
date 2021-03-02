const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
    "/",
    "https://sparshinnovators.com/pwatest/index.html",
    "https://sparshinnovators.com/pwatest/css/style.css",
    "https://sparshinnovators.com/pwatest/js/app.js",
    "https://sparshinnovators.com/pwatest/images/coffee1.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee2.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee3.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee4.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee5.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee6.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee7.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee8.jpg",
    "https://sparshinnovators.com/pwatest/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});
