/** @format */
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: '/',
		name: 'haejwo',
		short_name: 'haejwo',
		description: '우리 동네 심부름 매치',
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
