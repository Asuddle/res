import { Col, Row } from 'reactstrap';

// import ParticleAnimation from 'react-particle-animation';
// import Particles from 'react-tsparticles';
import styles from '../styles/Home.module.scss';

function ReadyBanner() {
	return (
		<div className={styles.readyBannerWrapper}>
			{/* <Canvas options={sample1} /> */}

			<div className={styles.container}>
				<div>
					{/* <Particles */}
					{/* id='tsparticles'
						// style={{ width: '100%', maxHeight: '500px', position: 'relative' }}
						// options={headerParticles}
					// /> */}
					<Row
						facts
						my-
						bg-gradient
						className='container facts justify-content-between '
						style={{ padding: '48px 0px' }}
					>
						<Col md={9} sm={12} style={{ textAlign: 'left' }}>
							<p className={styles.headerName}>
								Join Zes <span>to get Promotion</span>{' '}
							</p>

							<p className={styles.captionPara}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh.
							</p>
							<br />
						</Col>
						<Col
							md={3}
							sm={12}
							style={{ textAlign: 'right', marginTop: '32px' }}
						>
							<button>CLICK NOW!</button>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default ReadyBanner;
