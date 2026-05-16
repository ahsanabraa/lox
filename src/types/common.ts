import type { ReactNode } from 'react'

export interface PropsExtendChildren {
	children?: ReactNode
}

export interface Product {
	id: string
	name: string
	price: number
	category: string
	image: string
	discount: number
	rating: number
	promo?: boolean
	location: string
	date: string
	seller: string
}
