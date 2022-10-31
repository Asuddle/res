import {
	faChampagneGlasses,
	faHandshake,
	faHatWizard,
	faLightbulb,
	faRibbon,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.scss';

function WhyZES() {
	return (
		<section
			className={styles.whyZesWrapper}
			// className='space-ptb bg-dark-half-md'
		>
			<div className='container'>
				<div className='row mb-3 position-relative'>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className='linear-line-style'></div>
						<p className={styles.heading}>Why ZES</p>
						<p className={styles.subHeading}>
							Zes <span>Events Management</span>
						</p>
						<br />
						<p className={styles.description}>
							corrupti dolore illum doloremque hic dignissimos explicabo?
							Voluptates incidunt expedita hic. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Totam voluptatibus veniam impedit
							officia obcaecati atque soluta eum magni? Dicta ab culpa nesciunt
							at saepe pariatur dolorem cupiditate! Vitae, veritatis possimus!
						</p>
						<br />
						<button className={styles.aboutZesButton}>About ZeS</button>
						<br />
					</div>
					<div className='col-sm-12 col-md-12 col-lg-8'>
						<div className='category category-grid-style-01'>
							<div className='category-item col-sm-12 col-lg-4'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faHandshake} />
									{/* <i className='fa-regular fa-handshake'></i> */}
								</div>
								<br />
								<a href='#' className='category-title'>
									Friendly Team
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
							<div className='category-item col-lg-4 col-sm-12'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faRibbon} />
								</div>
								<br />
								<a href='#' className='category-title'>
									Perfect Decoration
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
							<div className='category-item col-lg-4 col-sm-12'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faChampagneGlasses} />
								</div>
								<br />
								<a href='#' className='category-title'>
									Unique Scenario
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
							<div className='category-item col-lg-4 col-sm-12'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faHatWizard} />
								</div>
								<br />
								<a href='#' className='category-title'>
									Rememberable Team
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
							<div className='category-item col-lg-4 col-sm-12'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faWhatsapp} />

									{/* <i className='fa-brands fa-whatsapp'></i> */}
								</div>
								<br />
								<a href='#' className='category-title'>
									Effective Support
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
							<div className='category-item col-lg-4 col-sm-12'>
								<div className='category-icon'>
									<FontAwesomeIcon icon={faLightbulb} />
								</div>
								<br />
								<a href='#' className='category-title'>
									Brilliant Ideas
								</a>
								<p className='category-caption'>
									lorem picsum ek dsa doijdasdijsad
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyZES;
