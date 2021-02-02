/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f201663b6530efb3f51c032632358927"
  },
  {
    "url": "about.html",
    "revision": "cdd1ecb6e14bc156a34d77b9ddc60737"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3469428.js",
    "revision": "4bf482e8cbfb089f81bfd7115a545c7e"
  },
  {
    "url": "assets/js/11.fa3340f7.js",
    "revision": "3518b2b6d5b1f01246e586b160c986c3"
  },
  {
    "url": "assets/js/12.3e724b67.js",
    "revision": "adaf5f5d2609ef15da7dedb5a9482a7c"
  },
  {
    "url": "assets/js/13.80233f48.js",
    "revision": "0731e4d543b28dfd8a3cdceb527ad974"
  },
  {
    "url": "assets/js/14.e2d7a0d4.js",
    "revision": "017ad8d387f26cd5f48906d696908f96"
  },
  {
    "url": "assets/js/15.2bfd3d8d.js",
    "revision": "45c8db4cfc731cc5380b08db42ac3ebe"
  },
  {
    "url": "assets/js/16.c0727268.js",
    "revision": "5d300935ba7e58523f6302c3353e584a"
  },
  {
    "url": "assets/js/17.9f30c8f9.js",
    "revision": "487cce117316acefcaa049c86d337b52"
  },
  {
    "url": "assets/js/18.a9a89c12.js",
    "revision": "a415bbd337320da76823b15b54ac877d"
  },
  {
    "url": "assets/js/19.154d06b6.js",
    "revision": "cbdcd4a419c41398ec771fd1c586bf35"
  },
  {
    "url": "assets/js/20.755541e3.js",
    "revision": "96b81a31edf565414e006349a7d26db6"
  },
  {
    "url": "assets/js/21.08199c9b.js",
    "revision": "2adb2e9ff461d3e305e8567451d135a9"
  },
  {
    "url": "assets/js/22.785da099.js",
    "revision": "6444226935cfff0a4f1373ba792082a1"
  },
  {
    "url": "assets/js/3.e05b1dff.js",
    "revision": "fb60fd4d89cd2d05cba48ca57ce44335"
  },
  {
    "url": "assets/js/4.c2bc4666.js",
    "revision": "768796bd1703174cabf453369057f318"
  },
  {
    "url": "assets/js/5.d2a3c341.js",
    "revision": "ad50115d6590c8d281e548acdb8a9a98"
  },
  {
    "url": "assets/js/6.2174eebb.js",
    "revision": "b003a76da09d8ad0d0ffb3bc66d87850"
  },
  {
    "url": "assets/js/7.4d7f823b.js",
    "revision": "e22f7b58086cdc3055582f835a33b072"
  },
  {
    "url": "assets/js/8.aeaeea10.js",
    "revision": "a2bae709c2597c1f3b361f40a7f17312"
  },
  {
    "url": "assets/js/9.b0ce26b7.js",
    "revision": "723129f04d5a3af7560922eb9f2e210b"
  },
  {
    "url": "assets/js/app.61946210.js",
    "revision": "fcc3dac34c56f11bc180686ec819f470"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "328f88506749522199eb203ec796ffe6"
  },
  {
    "url": "guide/about.html",
    "revision": "8127b11228fcaf38b570edd14cb46a5a"
  },
  {
    "url": "guide/feedback.html",
    "revision": "56171b5d63b0ae4983d8d6634177d2ec"
  },
  {
    "url": "guide/index.html",
    "revision": "271ab3e35f5abfe01a9641eafff58a01"
  },
  {
    "url": "guide/webp.html",
    "revision": "a002b3bbbc0ad7e1678bc3c205ec0f6e"
  },
  {
    "url": "idc.html",
    "revision": "57446c3ba950b350c9fbe4167c021a96"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "0a078b516f65b27e714fb949e312bd6e"
  },
  {
    "url": "releases.html",
    "revision": "2ab47fdb19de676074c1ca84ce6e967e"
  },
  {
    "url": "sponsors.html",
    "revision": "dcae2469dc86b0e56a734a9ad70f51fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
