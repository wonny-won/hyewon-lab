/** @format */

self.addEventListener('install', (event) => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

// ✅ 이게 핵심 (없으면 install prompt 안 뜨는 경우 많음)
self.addEventListener('fetch', (event) => {
	// 그냥 통과 (최소 구현)
});
