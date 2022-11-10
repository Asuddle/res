import { Col, Row } from 'reactstrap';

import HeadingComponent from './Heading';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

export default function UpcomingEvents() {
	return (
		<section
			className='space-ptb bg-dark-half-md'
			style={{ padding: '80px 0px' }}
			// data-aos='fade-up'
		>
			<div className='container'>
				<HeadingComponent
					heading='upcoming Events'
					subHeading='Latest'
					subBoldHeading='Awesome Events'
				/>
				<Row className={styles.eventImage} data-aos='fade-up'>
					{[1, 2, 3].map((item) => (
						<Col key={item} xs={12} sm={12} className={styles.imageWrapper}>
							<Image
								src={`/service-${item}.jpg`}
								layout='fill'
								alt='Brand logo'
							/>

							<p className={styles.eventDate}>
								15 <br /> <span>NOV</span>
							</p>

							<div className={styles.eventInfo}>
								<p className={styles.heading}>Event Name Here</p>
								<p className={styles.price}>3000 AED</p>
								<br />
								<p className={styles.venue}>
									<i className='fa-solid fa-location-dot'></i> Venue Here
								</p>
								<p className={styles.venue}>
									<i className='fa-solid fa-user'></i> Ladies & Gents
								</p>
								<br />
								<div style={{ display: 'inline-flex' }}>
									<button className={styles.bookNow}>BOOK NOW</button>
									<p className={styles.moreDetail}>See Details</p>
								</div>
								<div className={styles.divider}></div>
							</div>
						</Col>
					))}
				</Row>
				{/* <button className={styles.aboutZesButton}>View All Events</button> */}
			</div>
		</section>
	);
}
