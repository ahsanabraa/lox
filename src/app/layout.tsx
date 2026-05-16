import { Rubik } from 'next/font/google'

import { SerwistProvider } from './serwist'
import BottomNav from '@/components/BottomNav/BottomNav'
import Footer from '@/components/Footer/Footer'

import type { PropsExtendChildren } from '@/types/common'
import type { Metadata, Viewport } from 'next'
import type { FC } from 'react'

import '@/styles/global.css'

const nextFont = Rubik({
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family',
	adjustFontFallback: false
})

export const metadata: Metadata = {
	applicationName: 'LOX',
	title: 'LOX - Gadget & Tech Store',
	description: 'Jual beli smartphone, laptop, dan monitor berkualitas tinggi dengan harga terbaik.',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'Lox'
	},
	formatDetection: {
		telephone: false
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false
		}
	}
}

export const viewport: Viewport = {
	themeColor: '#0066FF',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	viewportFit: 'cover'
}

const RootLayout: FC<PropsExtendChildren> = ({ children }) => {
	return (
		<html lang="id">
			<body className={`${nextFont.variable}`}>
				<SerwistProvider swUrl="/serwist/sw.js">
					{children}
					<Footer />
					<BottomNav />
				</SerwistProvider>
			</body>
		</html>
	)
}

export default RootLayout
