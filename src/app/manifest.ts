import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: 'lox',
		short_name: 'lox',
		start_url: '/',
		id: 'lox',
		theme_color: '#FFFFFF',
		background_color: '#FFFFFF',
		display: 'standalone',
		scope: '/',
		categories: ['jual', 'beli'],
		description: 'lox',
		orientation: 'portrait',
		icons: [
			{
				src: '/icons/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/icons/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		screenshots: [
			{
				src: '/images/iphone15_black.jpeg',
				sizes: '1992x1773',
				type: 'image/jpeg'
			},
			{
				src: '/images/iphone15_green.jpeg',
				sizes: '1992x1773',
				type: 'image/jpeg'
			}
		],
		lang: 'id-ID'
	}
}

export default manifest
