import { Col, Row } from 'reactstrap';

import { Canvas } from 'react-canvas-js';
import ParticleAnimation from 'react-particle-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from '../styles/Home.module.scss';

function ReadyBanner() {
	return (
		<section className={styles.readyBannerWrapper}>
			{/* <Canvas options={sample1} /> */}

			<div className={styles.container}>
				<div>
					<Particles
						id='tsparticles'
						// style={{ width: '100%', maxHeight: '500px', position: 'relative' }}
						// options={headerParticles}
					/>
					<Row
						facts
						my-5
						// py-5
						bg-gradient
						className='container facts py-5 '
						// style='text-align: center;color: white !important;'
					>
						<Col md={9} sm={12}>
							<p className={styles.headerName}>
								Join Zes <span>to get Promotion</span>{' '}
							</p>

							<p className={styles.caption}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh.
							</p>
							<br />
						</Col>
						<Col md={3} sm={12}>
							<button style={{ marginTop: '72px' }}>CLICK NOW!</button>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	);
}

export default ReadyBanner;
