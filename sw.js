/* The Dummy Switch — service worker
   Cache-first for local assets; stale-while-revalidate for CDN (KaTeX).
   Note: only active on http/https (not file://), and service workers
   require a secure context — so it kicks in on the hosted share link. */

var CACHE = "dummy-switch-v3";
var LOCAL = [
  "./",
  "./index.html",
  "./bundle.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/favicon.png",
  "./icons/favicon-red.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(LOCAL);
    }).then(function () { self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin === location.origin) {
    // local: cache-first, then network and store
    event.respondWith(
      caches.match(req).then(function (hit) {
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