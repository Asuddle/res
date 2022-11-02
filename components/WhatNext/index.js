import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import HeadingComponent from '../Heading';
import Image from 'next/image';
import styles from '../../styles/WhatNext.module.scss';

export default function WhatNextComponent() {
	return (
		<div className={styles.galleryWrapper}>
			<ContainerComponent container='smallContainer'>
				<br />
				<br />
				<HeadingComponent
					heading='Upcoming Events'
					subBoldHeading='Awesome Events'
					subHeading='Latest'
				/>
				<Row className='text-center' style={{ padding: '16px' }}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
						<>
							<Col
								key={item}
								lg={6}
								md={12}
								sm={12}
								xs={12}
								data-aos='fade-up'
								style={{ textAlign: 'center' }}
							>
								<Row className={styles.cardWrapper} style={{ margin: '36px' }}>
									<Col md={7} style={{ paddingTop: '8px' }}>
										<Image
											className='img-fluid'
											src={`/service-${idx + 1}.jpg`}
											width='100%'
											height='100%'
											layout='responsive'
											alt=''
										/>
									</Col>
									<Col md={5}>
										<div className={styles.dataWrapper}>
											<p className={styles.eventName}>Event Name here</p>
											<p className={styles.price}>AED 2000</p>
											<p className={styles.venue}>
												<span>Venue Here</span>
											</p>
											<p className={styles.venue}>
												<span>Ladies & Gents</span>
											</p>
											<p className={styles.venue}>
												<span>20 Oct 2022</span>
											</p>
										</div>
										<div
											style={{
												display: 'inline-flex',
												textAlign: 'left',
												float: 'left',
											}}
										>
											<button className={styles.bookNow}>BOOK NOW</button>
											<p className={styles.moreDetail}>More Details</p>
										</div>
									</Col>
								</Row>
								<br />
								<br />
								<br />
							</Col>
						</>
					))}
				</Row>
			</ContainerComponent>
		</div>
	);
}
