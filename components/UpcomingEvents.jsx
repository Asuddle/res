import { Col, Row } from 'reactstrap';

import EventCard from './WhatNext/eventCard';
import GalleryCard from './Gallery/GalleryCard';
import HeadingComponent from './Heading';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

export default function UpcomingEvents() {
	return (
		<section
			className='space-ptb bg-dark-half-md'
			// data-aos='fade-up'
		>
			<div className='container'>
				<HeadingComponent
					heading='upcoming Events'
					subHeading='Latest'
					subBoldHeading='Awesome Events'
				/>
				<Row className={styles.eventImage} data-aos='fade-up'>
					{[1, 2, 3].map((item, idx) => (
						<Col md={4} key={idx}>
							<GalleryCard key={idx} item={item} idx={idx} />
						</Col>
					))}
				</Row>
				<br />
				<br />
				<br />
				{/* <button className={styles.aboutZesButton}>View All Events</button> */}
			</div>
		</section>
	);
}
