import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from '../components/Footer';
import GoogleMap from '../components/Map';
import Head from 'next/head';
import Header from '../components/Header';
import LifeWithWithoutZes from '../components/WhyZes/index';
import ReadyBanner from '../components/ReadyBanner';
import TestimonialComponent from '../components/Testimonial';

export default function WhyZes() {
	return (
		<div>
			<Head>
				<title>Res</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header title='Why Zes' member='' members='' />
			<LifeWithWithoutZes />
			<ReadyBanner />
			<br />
			<br />
			<br />
			<br />
			<TestimonialComponent />
			<GoogleMap />
			<Footer />
		</div>
	);
}
