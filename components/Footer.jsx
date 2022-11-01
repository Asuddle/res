import { Col, Row } from 'reactstrap';

import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Footer() {
	const linkArr = [
		{ name: 'Home' },
		{ name: 'About Zes' },
		{ name: 'Why Zes' },
		{ name: 'Interests' },
		{ name: 'Registration' },
		{ name: 'Contact Us' },
		{ name: 'Support' },
	];
	return (
		<div>
			<footer className={styles.footer}>
				<div
					className='container-fluid text-light footer py-5 wow fadeIn'
					// style='background:#282828'
					data-wow-delay='0.1s'
				>
					<div className='container py-5'>
						<Row>
							<Col lg={5} md={6}>
								<Image src='/logo.JPG' alt='logo' width={100} height={100} />
								<br />
								<br />
								<p className={styles.footerDescription}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Obcaecati, itaque animi sed sint laborum atque minima
									similique quos assumenda repellat, quasi corporis ex
									asperiores! Libero quibusdam incidunt mollitia a porro!
								</p>
								<br />
								<p>Follow Us</p>
							</Col>
							<Col lg={3} md={6}>
								<h4 className='text-white mb-4'>Quick Links</h4>
								{linkArr.map((item) => (
									<div key={item.name} className={styles.footerLink}>
										<a className='btn btn-link mb-3' href=''>
											{item.name}
										</a>
									</div>
								))}
							</Col>
							<Col lg={4} md={6}>
								<h4 className='text-white mb-4'>Newsletter</h4>
								<p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
								<div className='position-relative w-100'>
									<input
										className='form-control bg-light border-light w-100 py-3 ps-4 pe-5'
										type='text'
										placeholder='Your email'
									/>
									<button
										type='button'
										className='btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2'
									>
										SignUp
									</button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</footer>
			<div
				className='container-fluid copyright py-4'
				style={{ background: '#404040', color: 'white' }}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
							&copy;{' '}
							<a className='border-bottom' href='#'>
								ZES
							</a>
							, All Right Reserved.
						</div>
						<div className='col-md-6 text-center text-md-end'>
							Privacy Policy | Term & Conditions
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
