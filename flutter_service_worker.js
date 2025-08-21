'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f5bc208969198969f5b6c912d8ad22e",
"assets/AssetManifest.bin.json": "a24640b3f697b7147ea2cafa0f60088f",
"assets/AssetManifest.json": "a19adb15306547664e23fc4c81e1bc36",
"assets/assets/fonts/Debata-Regular.ttf": "ffaf04dfda771b9c8bbbfce1e8a5755c",
"assets/assets/fonts/pfbold.ttf": "a331b3585d2f3518c77e90c4d4169f24",
"assets/assets/fonts/pfRegular.ttf": "c179b003e07c52029f45c00698ca60f8",
"assets/assets/images/p1.png": "48f7b63fb28db1b3c1ad25d62f6703f1",
"assets/assets/images/p2%2520(1).png": "7c6b665045c71f685a6bf58dc757b3f6",
"assets/assets/images/p2.png": "7c6b665045c71f685a6bf58dc757b3f6",
"assets/assets/images/p3.png": "908eb480691a5d3ad3a1fde60c83cf8b",
"assets/assets/images/p4.png": "cbd3f3f9e766703c91593ab54842d3e0",
"assets/assets/images/p5.png": "2758e755a35612f29c8363092e6be735",
"assets/assets/images/p6.png": "c14b6160ca4d4b6d00cbaca22fbca0dd",
"assets/assets/images/p7.png": "535881fb4ce08b06715a3e70ecdf7b52",
"assets/assets/images/p8.png": "cbf9ded92325bf4eb9a613c48f328328",
"assets/assets/images/p9.png": "e5113ce866ce9140141b3e3ffa616eca",
"assets/assets/images/profile.png": "fbc4faac3ea7e040241ffc10e2203fbc",
"assets/assets/images/profile1.png": "4c34d2ccbeba86cdfbe44ce04f5e3438",
"assets/assets/images/profile2.png": "f86a8bd97f5d5700255847ab22ae391c",
"assets/assets/images/profile3.png": "4ff10d3b7f04df4abfddd70d5a4ba9d1",
"assets/assets/images/profile4.png": "1151d900b6ff0c82c559c8ce8a48ea4d",
"assets/assets/images/user1.jpg": "520b3787154494adaf2b04fead496efe",
"assets/assets/images/user2.png": "59a6b51292b3016438c75c6a68ca5ce1",
"assets/assets/svgs/bookmark.svg": "3febfbd8eb264a80e0f54f8ee0425408",
"assets/assets/svgs/cart.svg": "4465e560e57e0e4aa6b99ddc126db8c2",
"assets/assets/svgs/like.svg": "2b67ad19bee8a95cd90f8000033178b0",
"assets/assets/svgs/review.svg": "be465729a448372b00d2baf162c24c3e",
"assets/assets/svgs/share.svg": "df07c31787f8fd02fe244e43868b7bac",
"assets/assets/videos/tik1.mp4": "b28d02f14a140c90a91e1819e1a147b9",
"assets/assets/videos/tik2.mp4": "d6eb0c6e2355cb7a9a5031b77a1571a4",
"assets/assets/videos/tik3.mp4": "9d0824eec0ef93ce51da432026451c81",
"assets/assets/videos/tik4.mp4": "54642d864914d0fa37b35d76ddd7862f",
"assets/assets/videos/tik5.mp4": "515824698e2aa13326bc43dfb0d969a0",
"assets/assets/videos/tik6.mp4": "f29f945c390f86dda5adeb301d4bd8c9",
"assets/assets/videos/tik7.mp4": "5c584368aa3f6f466994cc7bea1b0b80",
"assets/assets/videos/tik8.mp4": "da9b012f6f1f9dbf46b1b7fe53f0e236",
"assets/assets/videos/tik9.mp4": "59e1267a996a854f0a08ac5b9ae977eb",
"assets/assets/videos/video1.mp4": "fe58edf5683673661530de30952a397e",
"assets/assets/videos/video2.mp4": "9f27d01f39ee212261a4c12511e148ab",
"assets/assets/videos/video3.mp4": "c2511ba0332d168b966566ebcfc7c720",
"assets/assets/videos/video4.mp4": "24b10d8b6c52e2dabd2358dfdb8227ce",
"assets/assets/videos/video5.mp4": "b216faef6789ede4e7497dbca525a26a",
"assets/assets/videos/video6.mp4": "38c5248eb38a35a9d2e5aa2b3187023f",
"assets/assets/videos/video7.mp4": "3c022482172e3688bc6c69f0a51f108b",
"assets/FontManifest.json": "4d454bdc0a6b3aa98b1c13318ed84b4a",
"assets/fonts/MaterialIcons-Regular.otf": "f10a93b53efc19b37fbe625ab77ad118",
"assets/NOTICES": "e56b28f52303fd4ee8ff0b61f3e1c5fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5d414dc885a499ea0f8b650dda13b288",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "64fdd789e1b470ccd7ee714196faa6ed",
"/": "64fdd789e1b470ccd7ee714196faa6ed",
"main.dart.js": "84172c19ab426e1426a7303961196791",
"manifest.json": "c69afd711e6999a265e7bb208def2a2a",
"version.json": "b653f0688c132faee0d0dca8784d06cc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
