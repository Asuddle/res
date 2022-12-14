import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import FoodCategory from '../components/Interests.js/food';
import Footer from '../components/Footer';
import GoogleMap from '../components/Map';
import Head from 'next/head';
import Header from '../components/Header';
import HeadingComponent from '../components/Heading';
import Image from 'next/image';
import InterestsCategories from '../components/Interests.js';
import KFCPage from '../components/Interests.js/kfc';
import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function Interests() {
	const [category, setCategory] = useState('');
	const [foodRes, setFoodRes] = useState('');
	const handleFood = () => {
		setCategory('food');
	};
	const handleFoodRes = () => {
		setFoodRes('kfc');
	};
	return (
		<div>
			<Head>
				<title>Res</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<Header title='Interests' member='' members='' />
			<br />
			<br />
			{/* Categoris */}

			{category !== 'food' && foodRes == '' && (
				<>
					<HeadingComponent
						heading='Enjoy Promotions'
						subHeading='Lets'
						subBoldHeading='Choose your Interests'
					/>
					<br />
					<br />
					<InterestsCategories handleFood={handleFood} />
				</>
			)}

			{category === 'food' && foodRes == '' && (
				<>
					<HeadingComponent
						heading='Enjoy Promotions'
						subHeading='Lets'
						subBoldHeading='Enjoy Your Meal'
					/>
					<br />
					<br />
					<FoodCategory handleFoodRes={handleFoodRes} />
				</>
			)}
			{foodRes !== '' && (
				<div>
					<HeadingComponent
						heading='Promotions By'
						subHeading=''
						subBoldHeading=''
					/>
					<KFCPage />
					<br />
					<br />
				</div>
			)}

			<GoogleMap />
			<Footer />
		</div>
	);
}
