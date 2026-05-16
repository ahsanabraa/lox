import { Suspense } from 'react'

import CategorySection from '@/components/CategorySection/CategorySection'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ProductGrid from '@/components/ProductGrid/ProductGrid'

async function HomeContent({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
	const { q: query = '' } = await searchParams

	return (
		<main>
			<Header />
			<div style={{ maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
				{!query && <Hero />}
				{!query && <CategorySection />}
				<ProductGrid search={query} />
			</div>
		</main>
	)
}

export default function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<HomeContent searchParams={searchParams} />
		</Suspense>
	)
}
