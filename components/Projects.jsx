import { Col, Container, Row } from 'reactstrap';

import HeadingComponent from './Heading';
import Image from 'next/image';
import { ProjectImageComponent } from './Image';
import styles from '../styles/Home.module.scss';

export default function ProjectsComponent() {
	const galleryImages = [
		{
			title: 'Project Title',
			largeImage: '/service-6.jpg',
			smallImage: '/service-6.jpg',
		},
		{
			title: 'Project Title',
			largeImage: '/service-2.jpg',
			smallImage: '/service-2.jpg',
		},
		{
			title: 'Project Title',
			largeImage: '/service-1.jpg',
			smallImage: '/service-1.jpg',
		},
		{
			title: 'Project Title',
			largeImage: '/service-3.jpg',
			smallImage: '/service-3.jpg',
		},
		{
			title: 'Project Title',
			largeImage: '/service-4.jpg',
			smallImage: '/service-4.jpg',
		},
		{
			title: 'Project Title',
			largeImage: '/service-5.jpg',
			smallImage: '/service-5.jpg',
		},
	];

	return (
		<div className={styles.projectWrapper} data-aos='flip-left'>
			<br />
			<br />
			<br />
			<div className={styles.container}>
				<HeadingComponent
					heading='Gallery'
					subHeading='Beautiful &'
					subBoldHeading='Unforgetable Times'
				/>
			</div>
			<Row noGutters>
				{galleryImages.map((item) => (
					<Col sm={12} md={6} lg={4} key={item.largeImage}>
						<ProjectImageComponent
							key={item.largeImage}
							title={item.title}
							largeImage={item.largeImage}
							smallImage={item.smallImage}
						/>
					</Col>
				))}
			</Row>
			{/* <Container fluid> */}
			{/* <Row noGutters>
					<Col md={4}>
						<Image alt='as' src='/service-1.jpg' height={400} width={400} />
					</Col>
					<Col md={4}>
						<Image width={400} alt='as' height={400} src='/service-2.jpg' />
					</Col>
					<Col md={4}>
						<Image width={400} alt='as' height={400} src='/service-3.jpg' />
					</Col>
					<Col md={4}>
						<Image width={400} alt='as' height={400} src='/service-4.jpg' />
					</Col>
					<Col md={4}>
						<Image width={400} alt='as' height={400} src='/service-5.jpg' />
					</Col>
					<Col md={4}>
						<Image width={400} alt='as' height={400} src='/service-6.jpg' />
					</Col>
				</Row> */}
			{/* </Container> */}
		</div>
	);
}
