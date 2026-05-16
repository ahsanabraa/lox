import { Home, MessageSquare, Plus, Search, User } from 'lucide-react'
import Link from 'next/link'

import styles from './BottomNav.module.css'

const BottomNav = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<Link
					href="/"
					className={styles.item}>
					<Home size={24} />
					<span>Explore</span>
				</Link>
				<button
					type="button"
					className={styles.item}>
					<MessageSquare size={24} />
					<span>Chat</span>
				</button>
				<div className={styles.sellWrapper}>
					<button
						type="button"
						className={styles.sellBtn}>
						<Plus
							size={32}
							color="white"
						/>
					</button>
					<span>Sell</span>
				</div>
				<button
					type="button"
					className={styles.item}>
					<Search size={24} />
					<span>My Ads</span>
				</button>
				<button
					type="button"
					className={styles.item}>
					<User size={24} />
					<span>My Account</span>
				</button>
			</div>
		</nav>
	)
}

export default BottomNav
