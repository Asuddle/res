import React, { Component } from 'react';
import { faQuoteLeft, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingComponent from './Heading';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/Home.module.scss';

function TestimonialComponent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		// autoplay: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const height = 500;
	const width = 1280;
	return (
		<div className={styles.container}>
			<HeadingComponent
				heading='Testimonial'
				subHeading='We have'
				subBoldHeading='Best Clients'
			/>
			<div className={styles.testimonialWrapper}>
				<Slider {...settings}>
					{[1, 2, 3].map((item, idx) => (
						<div key={item} className={styles.imageWrapper}>
							<Image
								src={`/components/Testimonial-BG.jpg`}
								alt='testimonial1'
								// layout='responsive'
								width='1100px'
								height='410px'
							/>

							<div className={styles.testimonialText}>
								<p className={styles.description}>
									orem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore magna
									aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
									nostrud exerci tation ullamcorper suscipit lobortis nisl ut
									aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
									consectetuer adipiscing elit, sed diam nonummy nibh euismod
									tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
									wisi enim ad minim veniam, quis nostrud exerci tation
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
									consequat.
								</p>
								<p className={styles.name}>Name here</p>
								<p className={styles.ceoFounder}>CEO Founder</p>
								<FontAwesomeIcon icon={faQuoteLeft} />
							</div>
						</div>
					))}
				</Slider>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default TestimonialComponent;
