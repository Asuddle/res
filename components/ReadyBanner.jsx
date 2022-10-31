import { Col, Row } from 'reactstrap';

import styles from '../styles/Home.module.scss';

function ReadyBanner() {
	return (
		<section className={styles.readyBannerWrapper}>
			<Row
				className='container-fluid facts my-5 py-5 bg-gradient'
				// style='text-align: center;color: white !important;'
			>
				<Col md={9}>
					<p className={styles.headerName}>
						Join Zes <span>to get Promotion</span>{' '}
					</p>

					<p className={styles.caption}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh.
					</p>
					<br />
				</Col>
				<Col md={3}>
					<button style={{ marginTop: '72px' }}>CLICK NOW!</button>
				</Col>
			</Row>
		</section>
	);
}

export default ReadyBanner;
