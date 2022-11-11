import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header';
import HeadingComponent from '../components/Heading';
import RegisterForm from '../components/Register/form';

export default function Register() {
	return (
		<div>
			<div>
				<Head>
					<title>Res</title>
					<meta name='description' content='Generated by create next app' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Header title='Register' member='' members='' />
				<HeadingComponent
					heading='BECOME A MEMBER'
					subHeading='Let’s'
					subBoldHeading='Connect with ZeS'
				/>
				<RegisterForm />
				<Footer />
			</div>
		</div>
	);
}
