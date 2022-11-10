import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import CEOMessage from '../components/About/CEOMessage';
import Footer from '../components/Footer';
import FounderMessage from '../components/About/FounderMessage';
import GoogleMap from '../components/Map';
import Head from 'next/head';
import Header from '../components/Header';
import ReadyBanner from '../components/ReadyBanner';
import SubHeader from '../components/SubHeader';
import VisionMissionComponent from '../components/About/VisionMission';
import WhoWeAre from '../components/WhoWeAre';

function AboutPage() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Head>
				<title>Res</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header title='About Us' member='' members='' />
			<WhoWeAre />
			<VisionMissionComponent />
			{/* <CEOMessage /> */}
			<FounderMessage />
			<ReadyBanner />
			<GoogleMap />
			<Footer />
		</div>
	);
}

export default AboutPage;
