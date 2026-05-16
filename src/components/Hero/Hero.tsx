import styles from './Hero.module.css'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.banner}>
				<div className={styles.bannerContent}>
					<div className={styles.tag}>#PilihYangAhli</div>
					<h2>Jual Mobil Sat-Set Prosesnya Bebas Ribet</h2>
					<div className={styles.ctaRow}>
						<button
							type="button"
							className={styles.ctaBtn}>
							Cek Harga
						</button>
						<button
							type="button"
							className={styles.ctaBtn}>
							Cek Kondisi Mobil
						</button>
					</div>
				</div>
				<div className={styles.dots}>
					<span className={styles.dot} />
					<span className={styles.dot} />
					<span className={styles.dot} />
					<span className={`${styles.dot} ${styles.active}`} />
				</div>
			</div>
		</section>
	)
}

export default Hero
