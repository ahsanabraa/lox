'use client'

import { Heart, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductCard.module.css'

import type { Product } from '@/types/common'

interface ProductProps {
	product: Product
}

const ProductCard = ({ product }: ProductProps) => {
	const formattedPrice = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(product.price)

	return (
		<Link
			href={`/product/${product.id}`}
			className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image
					src={product.image}
					alt={product.name}
					width={300}
					height={300}
					className={styles.image}
				/>
				<button
					type="button"
					className={styles.wishlistBtn}
					onClick={(e) => {
						e.preventDefault()
					}}>
					<Heart size={20} />
				</button>
			</div>

			{product.promo && (
				<div className={styles.highlight}>
					<Zap
						size={12}
						fill="currentColor"
					/>
					<span>Highlight</span>
				</div>
			)}

			<div className={styles.content}>
				<span className={styles.name}>{product.name}</span>
				<h4 className={styles.price}>{formattedPrice}</h4>

				<div className={styles.footer}>
					<span className={styles.location}>{product.location}</span>
					<span className={styles.date}>{product.date}</span>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
