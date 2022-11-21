import React, { useEffect, useState } from 'react';

import BurgerMenu from './burgerMenu';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';

const navArr = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Why Zes', href: '/why-zes' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Whats Next', href: '/what-next' },
	{ name: 'Interests', href: '/interests' },
	{
		name: 'Contact',
		href: '/contact',
	},
];
function Example() {
	const [activeNav, setActiveNav] = useState('/');
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setActiveNav(router.asPath);
	}, [router.asPath]);

	const handleRegister = () => {
		router.push('/register');
	};
	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<>
			<div className={styles.navContainer}>
				<div className={styles.navigationWrapper}>
					{/* <BurgerMenu /> */}
					<nav className='navbar navbar-expand-lg'>
						<Image
							className='navbar-brand'
							src='/zes2-black.png'
							alt='logo'
							width={100}
							height={100}
						/>

						<div
							className='collapse navbar-collapse'
							// id='navbarSupportedContent'
							// style={{ float: 'right' }}
						>
							<ul className='navbar-nav mr-auto' style={{ marginLeft: 'auto' }}>
								{navArr.map((item) => (
									<li
										key={item.name}
										className={
											item.href === activeNav ? styles.activeNav : 'nav-item'
										}
									>
										<Link href={item.href}>{item.name}</Link>
									</li>
								))}
								<li>
									<Button
										onClick={handleRegister}
										className={
											activeNav == '/register'
												? styles.activeBecomeMember
												: styles.becomeMember
										}
									>
										Become Member
									</Button>
								</li>
								<li className='nav-item'>
									<FontAwesomeIcon icon={faCircleUser} />
								</li>
							</ul>
						</div>
					</nav>
				</div>
				{/* <Menu isOpen={menuOpen} onStateChange={handleMenuOpen}>
					{navArr.map((item) => (
						<Link key={item.href} className='menu-item' href={item.href}>
							{item.name}
						</Link>
					))}
				</Menu> */}
			</div>
		</>
	);
}

export default Example;
