import 'aos/dist/aos.css';

import { Col, Row } from 'reactstrap';
import React, { useEffect } from 'react';
import {
	faCalendar,
	faLocation,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import ContainerComponent from '../container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header';
import HeadingComponent from '../Heading';
import Image from 'next/image';
import TabsComponent from '../tabs';
import styles from '../../styles/gallery.module.scss';

export default function GalleryMainComponent() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className={styles.galleryWrapper}>
			<ContainerComponent>
				<HeadingComponent
					heading='Gallery'
					subBoldHeading='Unforgetable Times'
					subHeading='Beautiful &'
				/>
				<TabsComponent />
				<br />
				<br />
				<Row className='text-center'>
					{[1, 2, 3, 4].map((item, idx) => (
						<Col key={item} lg={4} md={6} sm={6} xs={6} data-aos='fade-up'>
							<div className={styles.cardWrapper}>
								<Image
									className='img-fluid'
									src={`/home/Gallery${idx + 1}.jpg`}
									alt=''
									layout='responsive'
									width='100%'
									height='100%'
									// objectFit='contain'
								/>
								<div className={styles.dataWrapper}>
									<p className={styles.eventName}>Event Name here</p>
									<p className={styles.eventCaption}>
										lorem ipsum dsad asd asd as das das das d as das d dasd
										asdsa das das d asd ad as d
									</p>
									<div className={styles.eventInfo}>
										<p className={styles.venue}>
											<FontAwesomeIcon icon={faLocationDot} />{' '}
											<span>Venue</span>
										</p>
										<p className={styles.calendar}>
											<FontAwesomeIcon icon={faCalendar} />
											<span>20 Oct 2022</span>
										</p>
									</div>
								</div>
							</div>
							<br />
							{/* <br />
							<br /> */}
						</Col>
					))}
				</Row>
			</ContainerComponent>
		</div>
	);
}
