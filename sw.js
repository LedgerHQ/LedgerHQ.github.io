/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","488d7c1b1fc090996bfae5e6570b2389"],["/about/index.html","348fd964f81a41c625cb8125c7fcce86"],["/assets/css/main.css","1c09ce25a053e0faff099e259157e44e"],["/assets/img/favicon.jpg","89c9e26d1db26928537af51356bec604"],["/assets/img/icons/android-chrome-192x192.png","30d4ed062ac8cf49e1f30def2d52efa5"],["/assets/img/icons/android-chrome-256x256.png","341317e444f6fc6e6ff14736b247556e"],["/assets/img/icons/apple-touch-icon.png","ccb0ccb4b5edc95ec04ca1ad36476d67"],["/assets/img/icons/favicon-16x16.png","abc7f149006cd7c6e615c06796cfdc55"],["/assets/img/icons/favicon-32x32.png","ea3f76411e4f0a29deae3dc42fa5aaee"],["/assets/img/icons/favicon.png","e86a6da6230757cb41b9cbf59c94f865"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","5f273d665fb6f58c1507d88f0d6e7f39"],["/assets/img/posts/cuddlyferris.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_lg.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_md.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_placehold.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_sm.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_thumb.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_thumb@2x.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/cuddlyferris_xs.jpg","eb64355806967a894b6b68a8a4ad17e6"],["/assets/img/posts/mpc.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc.png","a8b041f81107dfe32c2e15c61a3ba5fc"],["/assets/img/posts/mpc_lg.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc_md.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc_placehold.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc_thumb.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc_thumb@2x.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/mpc_xs.jpg","20e5c8541bd09546cd96ede4425679d6"],["/assets/img/posts/sleek.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_lg.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_md.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_placehold.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_sm.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_thumb.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_thumb@2x.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/sleek_xs.jpg","05ae5978f542ebb2d98d5ff2577df21d"],["/assets/img/posts/speculos.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_lg.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_md.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_placehold.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_sm.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_thumb.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/img/posts/speculos_thumb@2x.jpg","44a7f4f2fbb7fca4297f463fbaa32f55"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/assets/ledgerlogo.png","362ec06d4f8607202c3c354bc25d455e"],["/assets/mpc/key_mgmt_lifecycle.png","edb30c3ee8fb14e5a6266349e2706b2e"],["/assets/mpc/quorum.png","3eb3a2255e6e7ce113390dcd18de1366"],["/assets/rust_app/ferrisandnano.png","f1173334b98960a8ddde5a1727d0d759"],["/assets/rust_app/rust-logo-blk.svg","b653c6e07999f2b00977c97e126edf79"],["/assets/speculos/speculos_archi.png","ee1357b59a4c1d647194c3eff0eb29b6"],["/assets/speculos/speculos_blue.png","b350f28876176137d948071ce75d0a83"],["/assets/speculos/speculos_nano.png","85ceda7a8a2c56f5c1f42e51f24629f8"],["/categories/index.html","c90e7f6b6cd76b14129d5eb8d95861a9"],["/contact/index.html","abef3e62e47aa707882e6ddd11cf1489"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index.html","4532c8331bc7f2b27c7694cddccfdec2"],["/rust-apps/index.html","1eec230478b358ea1096da2afbdb84a5"],["/speculos/index.html","21646221e8e17269f53550e1bd1fa962"],["/sw.js","95f34dbb00157510a07cd83a6f02f827"],["/take_on_mpc/index.html","0f5abde919066960459d5e38cff5a3c7"],["/vault/index.html","53ee6623ed6d63f1625e30b666c01f37"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







