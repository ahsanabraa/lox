'use client'

import { Bell, Heart, MapPin, Menu, Plus, Search, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import styles from './Header.module.css'
import productsData from '@/data/products.json'

import type { Product } from '@/types/common'

const Header = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const initialQuery = searchParams.get('q') || ''

	const [query, setQuery] = useState(initialQuery)
	const [suggestions, setSuggestions] = useState<Product[]>([])
	const [showSuggestions, setShowSuggestions] = useState(false)
	const suggestionRef = useRef<HTMLDivElement>(null)
	const mobileSuggestionRef = useRef<HTMLDivElement>(null)

	const handleSearch = (q: string) => {
		if (q.trim()) {
			router.push(`/?q=${encodeURIComponent(q.trim())}`)
		} else {
			router.push('/')
		}

		setShowSuggestions(false)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSearch(query)
		}
	}

	const handleQueryChange = (val: string) => {
		setQuery(val)

		if (val.length > 1) {
			const query = val.toLowerCase().trim()
			const terms = query.split(/\s+/).filter(Boolean)

			const filtered = productsData
				.map((p) => {
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
				.filter((p) => p.score > 0)
				.sort((a, b) => b.score - a.score)
				.slice(0, 5)

			setSuggestions(filtered)
			setShowSuggestions(true)
		} else {
			setSuggestions([])
			setShowSuggestions(false)
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isOutsideDesktop = suggestionRef.current && !suggestionRef.current.contains(event.target as Node)
			const isOutsideMobile = mobileSuggestionRef.current && !mobileSuggestionRef.current.contains(event.target as Node)

			if (isOutsideDesktop && isOutsideMobile) {
				setShowSuggestions(false)
			} else if (suggestionRef.current && isOutsideDesktop && !mobileSuggestionRef.current) {
				setShowSuggestions(false)
			} else if (mobileSuggestionRef.current && isOutsideMobile && !suggestionRef.current) {
				setShowSuggestions(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const renderSuggestions = (ref: React.RefObject<HTMLDivElement | null>) => {
		if (!showSuggestions || suggestions.length === 0) {
			return null
		}

		return (
			<div
				className={styles.suggestions}
				ref={ref}>
				{suggestions.map((p) => (
					<Link
						href={`/product/${p.id}`}
						key={p.id}
						className={styles.suggestionItem}
						onClick={() => setShowSuggestions(false)}>
						<Search
							size={16}
							className={styles.suggestIcon}
						/>
						<div className={styles.suggestContent}>
							<span className={styles.suggestName}>{p.name}</span>
							<span className={styles.suggestCat}>di {p.category}</span>
						</div>
					</Link>
				))}
			</div>
		)
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.topRow}>
					<button
						type="button"
						className={styles.menuButton}>
						<Menu size={24} />
					</button>
					<Link
						href="/"
						className={styles.logo}>
						LOX
					</Link>

					<div className={styles.desktopSearch}>
						<div className={styles.locationInput}>
							<MapPin size={18} />
							<input
								type="text"
								placeholder="Indonesia"
								readOnly
							/>
						</div>

						<div className={styles.searchInputWrapper}>
							<input
								type="text"
								placeholder="Temukan Mobil, Handphone, dan lainnya..."
								value={query}
								onChange={(e) => handleQueryChange(e.target.value)}
								onFocus={() => query.length > 1 && setShowSuggestions(true)}
								onKeyDown={handleKeyDown}
							/>
							<button
								type="button"
								className={styles.searchBtn}
								onClick={() => handleSearch(query)}>
								<Search
									size={20}
									color="white"
								/>
							</button>

							{renderSuggestions(suggestionRef)}
						</div>
					</div>

					<div className={styles.actions}>
						<button
							type="button"
							className={styles.iconButton}>
							<User size={24} />
						</button>
						<button
							type="button"
							className={styles.sellBtn}>
							<Plus size={20} /> JUAL
						</button>
					</div>

					<div className={styles.mobileIcons}>
						<Heart size={24} />
						<Bell size={24} />
					</div>
				</div>

				<div className={styles.mobileSearch}>
					<div className={styles.searchInputWrapper}>
						<Search
							size={20}
							className={styles.mobileSearchIcon}
						/>
						<input
							type="text"
							placeholder="Cari di LOX..."
							value={query}
							onChange={(e) => handleQueryChange(e.target.value)}
							onFocus={() => query.length > 1 && setShowSuggestions(true)}
							onKeyDown={handleKeyDown}
						/>
						{renderSuggestions(mobileSuggestionRef)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
