import styles from '../styles/Home.module.scss';

export default function PromotionBanner() {
	return (
		<section className={styles.readyBannerWrapper}>
			<div
				className='container-fluid facts my-5 py-5 bg-gradient'
				// style='text-align: center;color: white !important;'
			>
				<p className={styles.heading}>
					Are you ready to make <strong>your own Special Events?</strong>{' '}
				</p>

				<p className={styles.caption}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh.
				</p>
				<br />
				<button className='book-now-btn'>BOOK NOW!</button>
			</div>
		</section>
	);
}
