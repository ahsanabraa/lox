'use client'

import { Bookmark, ChevronLeft, Heart, MapPin, MessageCircle, Share2, ShieldCheck, User } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import styles from './ProductDetail.module.css'
import Header from '@/components/Header/Header'
import productsData from '@/data/products.json'

import type { Product } from '@/types/common'

export default function ProductPage() {
	const params = useParams()
	const router = useRouter()

	const product = useMemo(() => {
		return (productsData as Product[]).find((p) => p.id === params.id)
	}, [params.id])

	if (!product) {
		return null
	}

	const formattedPrice = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(product.price)

	return (
		<main className={styles.main}>
			<Header />

			<div className={styles.container}>
				<div className={styles.imageSection}>
					<div className={styles.imageHeader}>
						<button
							type="button"
							onClick={() => router.back()}
							className={styles.iconBtn}>
							<ChevronLeft size={24} />
						</button>
						<div className={styles.imageActions}>
							<button
								type="button"
								className={styles.iconBtn}>
								<Share2 size={24} />
							</button>
							<button
								type="button"
								className={styles.iconBtn}>
								<Heart size={24} />
							</button>
						</div>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							src={product.image}
							alt={product.name}
							width={500}
							height={500}
							className={styles.mainImage}
						/>
						<div className={styles.imageCounter}>1 / 2</div>
					</div>
				</div>

				<div className={styles.infoSection}>
					<div className={styles.priceRow}>
						<h1 className={styles.price}>{formattedPrice}</h1>
						<Heart
							size={24}
							className={styles.wishlistIcon}
						/>
					</div>
					<h2 className={styles.name}>{product.name}</h2>
					<div className={styles.metaRow}>
						<div className={styles.metaItem}>
							<MapPin size={16} />
							<span>KALASAN, SLEMAN KAB.</span>
						</div>
						<div className={styles.metaItem}>
							<span>23 APR</span>
						</div>
					</div>

					<div className={styles.divider} />

					<div className={styles.detailsSection}>
						<h3>Details</h3>
						<div className={styles.detailRow}>
							<span className={styles.label}>MEREK</span>
							<span className={styles.value}>Apple</span>
						</div>
						<div className={styles.detailRow}>
							<span className={styles.label}>KONDISI</span>
							<span className={styles.value}>Baru</span>
						</div>
					</div>

					<div className={styles.divider} />

					<div className={styles.descriptionSection}>
						<h3>Description</h3>
						<p>Ready Stock {product.name}. Kondisi sangat baik.</p>
						<p>Bisa Cash Dan Kredit...</p>
						<button
							type="button"
							className={styles.seeMore}>
							Selengkapnya
						</button>
					</div>

					<div className={styles.bookingBanner}>
						<div className={styles.bannerLeft}>
							<div className={styles.bannerTitle}>Beli barang ini pakai</div>
							<div className={styles.bookingAman}>
								<ShieldCheck size={16} />
								BookingAman!
							</div>
						</div>
						<ChevronLeft
							size={24}
							className={styles.bannerChevron}
						/>
					</div>

					<div className={styles.sellerSection}>
						<div className={styles.sellerHeader}>
							<div className={styles.sellerAvatar}>
								<User size={32} />
							</div>
							<div className={styles.sellerInfo}>
								<h4>{product.seller}</h4>
							</div>
							<ChevronLeft
								size={24}
								className={styles.sellerChevron}
							/>
						</div>
					</div>

					<div className={styles.mapSection}>
						<h3>Ad posted at</h3>
						<div className={styles.mapPlaceholder}>
							<MapPin
								size={32}
								color="#23e5db"
							/>
							<span>{product.location}</span>
						</div>
						<div className={styles.adIdRow}>
							<span>AD ID: 942088836</span>
							<button type="button">REPORT THIS AD</button>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bottomButtons}>
				<button
					type="button"
					className={styles.chatBtn}>
					<MessageCircle size={20} />
					Chat
				</button>
				<button
					type="button"
					className={styles.bookingBtn}>
					<Bookmark size={20} />
					Booking
				</button>
			</div>
		</main>
	)
}
