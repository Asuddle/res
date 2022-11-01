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
				<div className='row mb-3 position-relative'>
					<div className='col-sm-12 col-md-12 col-lg-5'>
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
					</div>
					<div className='col-sm-12 col-md-12 col-lg-8'></div>
				</div>
			</div>
		</section>
	);
}

export default WhoWeAre;
