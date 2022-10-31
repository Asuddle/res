import React, { Component } from 'react';

import HeadingComponent from './Heading';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/Home.module.scss';

function TestimonialComponent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
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
								src={`/testimonial-${idx}.jpg`}
								alt='testimonial1'
								layout='responsive'
								width='100%'
								height='48%'
							/>
							<div className={styles.testimonialText}>
								<p>
									Lorem asd sad asd as das d as d as d as d as d as d as d as d
									asd as d asdas dasdasdasdasdasdasdasdasdasdasdasdasdasdasd
								</p>
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
