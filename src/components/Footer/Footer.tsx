import styles from './Footer.module.css'
import PwaInstallButton from '../ButtonPwaInstall/ButtonPwaInstall'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<h2 className={styles.logo}>LOX</h2>
						<p>Marketplace gadget premium untuk pengalaman jual beli yang luar biasa.</p>
					</div>
					<div className={styles.links}>
						<div className={styles.column}>
							<h4>KATEGORI POPULER</h4>
							<ul>
								<li>Mobil</li>
								<li>Motor</li>
								<li>Smartphone</li>
								<li>Laptop</li>
							</ul>
						</div>
						<div className={styles.column}>
							<h4>TENTANG KAMI</h4>
							<ul>
								<li>Tentang LOX Group</li>
								<li>Blog</li>
								<li>Kontak Kami</li>
								<li>LOX untuk Bisnis</li>
							</ul>
						</div>
						<div className={styles.column}>
							<h4>LOX</h4>
							<ul>
								<li>Bantuan</li>
								<li>Peta Situs</li>
								<li>Informasi Hukum & Privasi</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.pwaSection}>
						<span>Dapatkan pengalaman lebih baik di aplikasi kami</span>
						<PwaInstallButton />
					</div>
					<div className={styles.copyright}>
						<span>© 2026 LOX Marketplace. Semua hak dilindungi.</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
