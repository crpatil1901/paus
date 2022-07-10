'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "87962f3b865f4e58886c584c3b333701",
"index.html": "2fe4b788112bd6638d3246054484b684",
"/": "2fe4b788112bd6638d3246054484b684",
"main.dart.js": "7ef8d343e08b56fe37c4d31d970ef1bf",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc05b277aa8f9d5d34a02cf81b87ddf7",
"assets/AssetManifest.json": "665899b4d89853e75daccbb7ac4dcb31",
"assets/NOTICES": "354ad943c593b2e663c6c4a18ed740b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/02n.jpg": "b2364b515da99ad89b29c0a7da4e8d1b",
"assets/assets/images/03n.jpg": "b2364b515da99ad89b29c0a7da4e8d1b",
"assets/assets/images/01d.jpg": "7b50e28f8d901126b54b93b582e884ce",
"assets/assets/images/04n.jpg": "d8cf9578fcc5f3d873d7973ba878db3f",
"assets/assets/images/10d.jpg": "7bcfbdfa562e3ba64d7e44532613a8bc",
"assets/assets/images/09n.jpg": "ce50a7a931b397ac8d703d5e8fbba44b",
"assets/assets/images/50d.jpg": "4c6b700e928948c23333b9886c7f5f0c",
"assets/assets/images/11d.jpg": "916215da40693abf2e86b0d801b47bbf",
"assets/assets/images/13n.jpg": "733e0a6bc4b42b8781b3b07134ff80d3",
"assets/assets/images/10n.jpg": "ce50a7a931b397ac8d703d5e8fbba44b",
"assets/assets/images/04d.jpg": "55ea3ac9d6e9fd53cdade0b64c4b5686",
"assets/assets/images/13d.jpg": "89199205e033fca76ee26d37c9f4cd3f",
"assets/assets/images/09d.jpg": "7bcfbdfa562e3ba64d7e44532613a8bc",
"assets/assets/images/50n.jpg": "4c6b700e928948c23333b9886c7f5f0c",
"assets/assets/images/11n.jpg": "916215da40693abf2e86b0d801b47bbf",
"assets/assets/images/02d.jpg": "1b92423cf0ef72b8f35406be670584d1",
"assets/assets/images/00x.jpg": "024c2f82ac81bc4a0bec19e58c7e8372",
"assets/assets/images/01n.jpg": "15935dcc2ad83ce5517d577ced92064b",
"assets/assets/images/03d.jpg": "1b92423cf0ef72b8f35406be670584d1",
"assets/assets/icons/13n.svg": "7fd32ddd889d1e135558c9864a4980af",
"assets/assets/icons/11d.svg": "48403b2990c00d9f3297a62effbb1f32",
"assets/assets/icons/50d.svg": "b54aa1594c3b5b0752ae9f14f90ca0ff",
"assets/assets/icons/09n.svg": "cfab16db8f54ab58b87ab7b0d449fae6",
"assets/assets/icons/10d.svg": "160bb22233076a28b012f046c80a153a",
"assets/assets/icons/04n.svg": "97bf9862b5523e8b892e77042275c59c",
"assets/assets/icons/01d.svg": "0b8617cafe933c29cd334edef751aa6f",
"assets/assets/icons/03n.svg": "7a8efa28e10c19a13a63dd46fcfa165c",
"assets/assets/icons/02n.svg": "7bc97063c7ddb0b199f844dacbdc30e5",
"assets/assets/icons/03d.svg": "7a8efa28e10c19a13a63dd46fcfa165c",
"assets/assets/icons/01n.svg": "b600c05e10e7511bb45c2cb83e790f52",
"assets/assets/icons/00x.svg": "4bea8e1d22a98cc479cc30841a49be15",
"assets/assets/icons/02d.svg": "c248e0a6fbc73e3178118313d294cd7a",
"assets/assets/icons/11n.svg": "48403b2990c00d9f3297a62effbb1f32",
"assets/assets/icons/50n.svg": "b54aa1594c3b5b0752ae9f14f90ca0ff",
"assets/assets/icons/09d.svg": "cfab16db8f54ab58b87ab7b0d449fae6",
"assets/assets/icons/13d.svg": "7fd32ddd889d1e135558c9864a4980af",
"assets/assets/icons/04d.svg": "97bf9862b5523e8b892e77042275c59c",
"assets/assets/icons/10n.svg": "160bb22233076a28b012f046c80a153a",
"assets/assets/purple_clouds.jpeg": "dd505bcbe85051cca44d980b1749de54",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
