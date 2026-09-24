/* The Nerd Switch — service worker
   Cache-first for local assets; stale-while-revalidate for CDN (KaTeX).
   Note: only active on http/https (not file://), and service workers
   require a secure context — so it kicks in on the hosted share link. */

var CACHE = "nerd-switch-v20";
var LOCAL = [
  "./",
  "./index.html",
  "./bundle-light-reality-cycle.js",
  "./bundle-the-theory.js",
  // add every "./bundle-<id>.js" shipped in index.html here too
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/favicon.png",
  "./icons/favicon-red.png",
  "./fonts/literata-var-latin.woff2"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(LOCAL);
    }).then(function () { self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  // prune caches from older versions / previous names on activation
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.filter(function (n) { return n !== CACHE; })
        .map(function (n) { return caches.delete(n); }));
    }).then(function () { self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin === location.origin) {
    // local: cache-first, then network and store.
    // Navigations carry ?p=<id> — cache them under the path-only key so
    // deep links still work offline.
    var key = (req.mode === "navigate") ? url.origin + url.pathname : req.url;
    event.respondWith(
      caches.match(key).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
          return res;
        });
      }).catch(function () {
        return caches.match("./index.html");
      })
    );
  } else {
    // CDN: stale-while-revalidate
    event.respondWith(
      caches.match(req).then(function (hit) {
        var network = fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
          return res;
        }).catch(function () { return hit; });
        return hit || network;
      })
    );
  }
});