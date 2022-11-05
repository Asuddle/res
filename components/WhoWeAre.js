import { Col, Row } from 'reactstrap';
import {
	faChampagneGlasses,
	faHandshake,
	faHatWizard,
	faLightbulb,
	faRibbon,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/About.module.scss';

function WhoWeAre() {
	return (
		<section
			className={styles.whoWeAre}
			data-aos='fade-right'
			data-aos-delay='500'
		>
			<div className='container'>
				<Row className='mb-3 position-relative'>
					<Col md={12} sm={12} lg={6}>
						<div className={styles.upperDivider}></div>
						<div className={styles.dataWrapper}>
							<p className={styles.heading}>Who we are</p>
							<p className={styles.subHeading}>
								Few <span>Words About ZeS</span>
							</p>
							<br />
							<p className={styles.description}>
								corrupti dolore illum doloremque hic dignissimos explicabo?
								Voluptates incidunt expedita hic. Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Totam voluptatibus veniam impedit
								ot saepe pariatur dolorem cupiditate! Vitae, veritatis possimus!
							</p>
							<p className={styles.description}>
								corrupti dolore illum doloremque hic dignissimos explicabo?
								Voluptates incidunt expedita hic. Lorem, ipsum dolor sit amet
								consectetur adipisicing elit.
							</p>
							<br />
							<br />
							<button className={styles.aboutZesButton}>Join Now</button>
							<br />
						</div>
					</Col>
					<Col md={12} sm={12} lg={6} className={styles.imagePortion}>
						<div className={styles.parent}>
							<div className={styles.designDivider}></div>
							<Image
								className={styles.image1}
								width={460}
								height={500}
								alt='image-1'
								src='/service-2.jpg'
							/>
							<div className={styles.smallImageWrapper}>
								<Image
									className={styles.image2}
									width={280}
									height={280}
									alt='image-2'
									src='/service-4.jpg'
								/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			<br />
			<br />
			<br />
		</section>
	);
}

export default WhoWeAre;
