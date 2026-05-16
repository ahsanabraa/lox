import { Bike, Car, Gift, Home, LayoutGrid, MessageSquare } from 'lucide-react'

import styles from './CategorySection.module.css'

const categories = [
	{ name: 'View all', icon: LayoutGrid, color: '#e8f3ff' },
	{ name: 'Barang Gratis', icon: Gift, color: '#fef3e0' },
	{ name: 'Mobil', icon: Car, color: '#e8f7f6' },
	{ name: 'Properti', icon: Home, color: '#f0f0ff' },
	{ name: 'Motor', icon: Bike, color: '#e8f3ff' },
	{ name: 'Jasa & Lowongan', icon: MessageSquare, color: '#fff0f0' }
]

const CategorySection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				{categories.map((cat) => (
					<button
						type="button"
						key={cat.name}
						className={styles.card}>
						<div
							className={styles.iconWrapper}
							style={{ backgroundColor: cat.color }}>
							<cat.icon
								size={24}
								strokeWidth={1.5}
							/>
						</div>
						<span className={styles.name}>{cat.name}</span>
					</button>
				))}
			</div>
		</section>
	)
}

export default CategorySection
