'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"assets/AssetManifest.json": "33cf99ebe170d4ff9bcaf62064be67e5",
"assets/assets/Rainonumbrella.mp3": "9cbfca167659ab377686efdb20a0b09d",
"assets/assets/Forest.mp3": "94805e9c656ba4b2d40d92858c5e32b9",
"assets/assets/Summerrain.mp3": "9815eef2bfda3845ba7060bf7335d4fb",
"assets/assets/Alarm.riv": "addd609a356caea54c63248f06fcc3e5",
"assets/assets/Clock.riv": "2a52222403477e3afd9bb428f9d84179",
"assets/assets/Timer.riv": "4b353bede1ac17169b139cd96dd79e79",
"assets/assets/Night.mp3": "e77dcfd13ac3d15d396d20335787aecb",
"assets/assets/Rainwiththunder.mp3": "3ac2177cd2fcc426a936469b9c9aefd2",
"assets/assets/Stopwatch.riv": "b26538ae0bca16e16301052662babace",
"assets/assets/Beach.mp3": "64f450998971bce7682d2f97e88b5407",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/NOTICES": "0f2318aea34ccb2a8f4643c3d517d3b4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/shaders/ink_sparkle.frag": "e54a4ffde0224a3fcc45559845652c2f",
"main.dart.js": "0dbcb1d9d129018ed40e703defcce14e",
"index.html": "63ecfb3ad45ee4ec01630af2488f9e69",
"/": "63ecfb3ad45ee4ec01630af2488f9e69",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "081f755e2f8569789643440f7a2b4979",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/index": "bd2b62a0ab4a6f45712851dc65f907e4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/ea/fa536c905c6bc32e43ea061bb35f8445881665": "506fcd859f689cea66d5752fd8726c3b",
".git/objects/27/e4a993928dbe530abe5d1834f6eb7e3f353f18": "13715da1dc9e8b7068b7d6d3106cbb18",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/9c/32544d210469f313da08ad16c5f7ca0aeb6196": "ba67ebff29de51a5e489b9bd62f332ff",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/18/a1581f43633cf4cff06a641aaa7764e1fc41e1": "5c861cbaf34b58e0ca65023cb8ceef79",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/94/9a5edc52d70f9c0accbe7fbd059d20f403a53d": "7f828c15ca141af1693c72ed43851c7e",
".git/objects/b4/7e76c5d119a7af2e71147009ffc93f650b1b5a": "ff66bcbd5f6600a12376aac60226a4af",
".git/objects/9a/93917004858b5ed69ecc5c10ed0826b5241e32": "771e61bda0e82cd8816d69dc22f8718a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d0/684d7b7affa9a2e96b174436e00c9c5812dda1": "7c14e777cf1637e033243b9b897f818e",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/f6f345b7fa1f4f3ee5d74b78514d2b959c9040": "1673ebd288269d7ba3b8899de9c27ca6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/b8/338e0e5721da7a2cd46940d8da004d3df4c1d1": "8aaea65042b1b33750b62a909fdd7888",
".git/objects/84/65b4dd183e05be64c62fd19f5849310b519948": "a027527a48994c906b6449fe7a87a980",
".git/objects/84/3b3bc8a05c4ac636cefc60db0c131ae8d4dff6": "765710b7b5b0e76c9fc595d7f5546573",
".git/objects/af/81203f111899eea1bb07cb9148fbe028a17ad4": "9dd133b9e12dba2af521118ce7c7d4d6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/fd/1ed749e37b76c1012725c01e397f34719e1161": "6895bfdfbbd64efba8a013a25cd2a2cb",
".git/objects/50/2a506ccb4c3dd4eef192e11af6e6663f8ae91b": "d71dbbdf384d986ee0434a190a386d44",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/aa/01f2230334fb8c185fe59e34431f2547847105": "dc7047c493f66719667f165e25be72a9",
".git/objects/aa/941d991990602710fe73cb706e2dea48acf3fc": "181d2827ebabfc430acb4ee15f41f58f",
".git/objects/6b/4c2f276cd0cd17158cb81d91f862f45615aee1": "f0d1de6dd7df7b630c674a6c1cb00ab7",
".git/objects/14/bc27568ab6a1e6b3a61c19aa29e15513f3a4a4": "484b915aff8f6493ac8469f1386b7a69",
".git/objects/dc/227c03d936c6d05f4efcab49d6a795aba6064a": "9831bc5abc2916f1bad7717cafeaf7ff",
".git/objects/78/73ac759c7d70b925e898765ddfd3509f29d6a5": "191daec6f44a82e6972ed48b634296ea",
".git/objects/96/8874a232b25bf14768febd60672b3387cd52c6": "48af8c4679ead1f61255fca77d999163",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/ef/59a87aa69e4e705b243a943d391a1abe3482df": "8f1e4359cb8e647551db65546eb728b0",
".git/objects/74/1c3c80a1c203f0d78a1793ef335cd24206359c": "9e096a83ab3b64e67d4c9419128912ee",
".git/objects/29/2785cdd0b405268e71de6525a93d5b7ee04dd6": "47a19541f68f0eb939e2b5891588f9e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/35/2477514536cd5d9b05b992709131dcc4b85305": "90bde50056f3eeb2293f31d106d6d51f",
".git/objects/08/cb416d4d10a15f9d05b5f2b5f07faaba111887": "0d5219efd8d6918202d052cc4d50887c",
".git/objects/86/19f230c779763758ab72920042c00f16742829": "edbd9087c06bad99275683850135a109",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c626462e627f0f94c23d6f733cea6a8ffdc925": "ba0f449493dfcad307284fee0e097065",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/bd/4e121b530fa2db6ae19609fa84f0023a3046a0": "b754d33faeed9cf23e2d9327ac496d82",
".git/objects/51/3fa6484bfc967715fbef6430617d9ba4ec55ca": "12a5442e27bdba14c43b5227f2a428e1",
".git/objects/92/98672864215d167f29453d4b19b0eb4af5f7d4": "4349db48725403c324234cbc311e603c",
".git/objects/0b/e449a91db7b53face52be22324bbccd82d0faa": "107f55efaaa15226e946a5416e631250",
".git/objects/39/54d05c308f690ee9f051ef12a9b6a1cfd30778": "abb86fbea3bdf89e15cc78cbee0e825f",
".git/objects/89/45247bd908c602540c5fc9a310046ad2214115": "3855111a4ab98264ef829f413bd9705d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a8/8c06ecbcb3be3038031e8ee097182cbba5535f": "4513ee2ba627d41ac5df5c2a80e4cded",
".git/objects/f4/52deacf54255994ce70c650689ae5ba8147a88": "643bd0d16d05cce171bc05ce8bb3ce0d",
".git/objects/ad/eb3ed8e13389fa2fccd4509bdf61118bc51532": "944c634f0d927daffcac56aa0f334bad",
".git/objects/ad/579282d67a2ec109338a3505be145d5f3e19cf": "5287883b0cc351c1f12130f184031d82",
".git/objects/fe/6b2e6742f6ab080d58309c238d9b2848e23c2c": "f016cf77b653877717aa0a6658fa5a19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "5b419b746082ccebdd1388cf0a762219",
".git/logs/refs/remotes/origin/web": "e7a889336ebd086f381210a33dfa6bb5",
".git/logs/refs/heads/web": "76e0dc3240b7f0e095a78e2081178f8d",
".git/refs/remotes/origin/web": "13ea26075f2f50316fc54d43395a5de4",
".git/refs/heads/web": "13ea26075f2f50316fc54d43395a5de4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "cca28c0abb409d9a50cffc45d578ebd4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
