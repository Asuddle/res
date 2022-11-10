import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import Image from 'next/image';
import styles from '../../styles/Interest.module.scss';

export default function InterestsCategories() {
	return (
		<ContainerComponent>
			<div className={styles.interestCategoriesWrapper}>
				<Row>
					<Col md={4} className='text-center'>
						<div className={styles.overlay}>
							<p>Food</p>
							<Image
								src='/PG1/Food.png'
								width='221px'
								height='221px'
								alt='accessories'
							/>
						</div>
					</Col>
					<Col md={4} className='text-center'>
						<div className={styles.overlay}>
							<p>Sports</p>
							<Image
								src='/PG1/Sports.png'
								width='221px'
								height='221px'
								alt='accessories'
							/>
						</div>
					</Col>
					<Col md={4} className='text-center'>
						<div className={styles.overlay}>
							<p>Accessories</p>
							<Image
								src='/PG1/Accessories.png'
								width='221px'
								height='221px'
								alt='accessories'
							/>
						</div>
					</Col>
				</Row>
				<br />
				<br />
				<br />
				<Row>
					<Col md={2}></Col>
					<Col md={4} className='text-center'>
						<div className={styles.overlay}>
							<p>Makeup</p>
							<Image
								src='/PG1/Makeup.png'
								width='221px'
								height='221px'
								alt='accessories'
							/>
						</div>
					</Col>
					<Col md={4} className='text-center'>
						<div className={styles.overlay}>
							<p>Fashion</p>
							<Image
								src='/PG1/Fashion.png'
								width='221px'
								height='221px'
								alt='accessories'
							/>
						</div>
					</Col>
					<Col md={2}></Col>
				</Row>
				<br />
				<br />
				<br />
			</div>
		</ContainerComponent>
	);
}
