import styles from './ProductGrid.module.css'
import productsData from '../../data/products.json'
import ProductCard from '../ProductCard/ProductCard'

interface ProductGridProps {
	search?: string
}

const ProductGrid = ({ search = '' }: ProductGridProps) => {
	const filteredProducts = productsData
		.map((p) => {
			if (!search) {
				return { ...p, score: 0 }
			}

			const query = search.toLowerCase().trim()
			const terms = query.split(/\s+/).filter(Boolean)
			const name = p.name.toLowerCase()
			const cat = p.category.toLowerCase()

			let score = 0
			let matchesAll = true

			for (const term of terms) {
				if (name.includes(term)) {
					score += 10

					if (name.startsWith(term)) {
						score += 5
					}
				} else if (cat.includes(term)) {
					score += 5
				} else {
					matchesAll = false
				}
			}

			// Bonus for exact or full match
			if (name.includes(query)) {
				score += 50
			}

			if (name === query) {
				score += 100
			}

			return { ...p, score: matchesAll ? score : 0 }
		})
		.filter((p) => (search ? p.score > 0 : true))
		.sort((a, b) => b.score - a.score)

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h3 className={styles.title}>{search ? `Hasil pencarian: "${search}"` : 'Rekomendasi Untukmu'}</h3>
				{!search && (
					<button
						type="button"
						className={styles.seeAll}>
						Lihat Semua
					</button>
				)}
			</div>

			{filteredProducts.length > 0 ? (
				<div className={styles.grid}>
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			) : (
				<div className={styles.noResults}>
					<p>Tidak ada produk yang ditemukan untuk "{search}"</p>
				</div>
			)}
		</section>
	)
}

export default ProductGrid
