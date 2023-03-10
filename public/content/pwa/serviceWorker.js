const mandalSoftSite = "mandal-soft-site-v1";
const assets = [
  "/",
  "/home",
  "/about",
  "/contact",
  "/content/images/MandalLogo.png",
  "/content/css/font-awesome.min.css",
  "/content/css/style.css",
  "/content/images/Mandal_Logo.png",
  "/content/js/script.js",
  "/content/js/bubblescursor.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(mandalSoftSite).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});