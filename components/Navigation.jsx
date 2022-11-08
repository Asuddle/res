import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';

// <-- import styles to be used

function Example(args) {
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
	const [activeNav, setActiveNav] = useState('/');
	const router = useRouter();

	useEffect(() => {
		console.log('useEffect fired!', { asPath: router.asPath });
		setActiveNav(router.asPath);
	}, [router.asPath]);

	return (
		<div className={styles.container}>
			<div className={styles.navigationWrapper}>
				<nav className='navbar navbar-expand-lg'>
					<Image
						class='navbar-brand'
						src='/logo.JPG'
						alt='logo'
						width={100}
						height={100}
					/>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
						style={{ float: 'right' }}
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
							<li className='nav-item'>
								<button className={styles.becomeMember}>Become Member</button>
							</li>
							<li className='nav-item'>
								<FontAwesomeIcon icon={faCircleUser} />
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Example;
