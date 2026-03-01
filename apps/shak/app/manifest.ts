/** @format */
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: '/',
		name: 'shak',
		short_name: 'shak',
		description: '구매가를 반으로 샥-',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		display_override: ['standalone', 'minimal-ui', 'browser'],
		icons: [
			{ src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
		],
	};
}
