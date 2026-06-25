/* Cœur·Lingo — Service Worker (cache-first, offline-fähig) */
const CACHE="coeurlingo-v4";
const CORE=["./","./index.html","./data/inhalte.js","./data/inhalte-b2c1.js","./data/i18n-en.js","./data/inhalte-themen.js","./data/thema-tags.js","./manifest.webmanifest"];
const OPT=["./icon-192.png","./icon-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(CACHE);
    await c.addAll(CORE);                       // Pflicht-Dateien
    await Promise.allSettled(OPT.map(u=>c.add(u))); // Icons optional (falls noch nicht da)
    self.skipWaiting();
  })());
});
self.addEventListener("activate",e=>{
  e.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    self.clients.claim();
  })());
});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET")return;
  e.respondWith((async()=>{
    const cached=await caches.match(r);
    if(cached)return cached;
    try{
      const res=await fetch(r);
      if(res&&res.status===200&&new URL(r.url).origin===location.origin){
        const c=await caches.open(CACHE);c.put(r,res.clone());
      }
      return res;
    }catch(err){
      return cached||Response.error();
    }
  })());
});
