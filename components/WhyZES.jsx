import WhyZesIcons from './whyZesIcons';
import styles from '../styles/Home.module.scss';

const imageArr = [
	{ name: 'Friendly Team' },
	{ name: 'Perfect Decoration' },
	{ name: 'Unique Scenario' },
	{ name: 'Rememberable Time' },
	{ name: 'Effective Support' },
	{ name: 'Brilliant Ideas' },
];

function WhyZES() {
	return (
		<section
			className={styles.whyZesWrapper}
			data-aos='fade-right'
			data-aos-delay='500'
		>
			<div className='container'>
				<div className='row mb-3 position-relative'>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className={styles.upperDivider}></div>
						<div className={styles.dataWrapper}>
							<p className={styles.heading}>Why ZES</p>
							<p className={styles.subHeading}>
								ZeS <span>Events Management</span>
							</p>
							<br />
							<p className={styles.description}>
								corrupti dolore illum doloremque hic dignissimos explicabo?
								Voluptates incidunt expedita hic. Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Totam voluptatibus veniam impedit
								officia obcaecati atque soluta eum magni? Dicta ab culpa
								nesciunt at saepe pariatur dolorem cupiditate! Vitae, veritatis
								possimus!
							</p>
							<br />
							<br />
							<button className={styles.aboutZesButton}>ABOUT ZeS</button>
							<br />
						</div>
					</div>
					<div className='col-sm-12 col-md-12 col-lg-8'>
						<div className='category category-grid-style-01'>
							{imageArr.map((item, idx) => (
								<WhyZesIcons key={item.name} item={item} index={idx} />
							))}

							{/* <div className='category-item col-lg-4 col-sm-12'>
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

									 <i className='fa-brands fa-whatsapp'></i> 
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
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</section>
	);
}

export default WhyZES;
