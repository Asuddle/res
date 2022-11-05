import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import HeadingComponent from '../Heading';
import Image from 'next/image';
import styles from '../../styles/why-zes.module.scss';

export default function EventManagementSolutions() {
	return (
		<section
			data-aos='fade-right'
			data-aos-delay='500'
			style={{ minHeight: '790px' }}
		>
			{/* <ContainerComponent> */}{' '}
			<Row className={styles.eventManagementSolutionsWrapper}>
				<Col md={6} style={{ padding: '0px' }} className={styles.image}>
					<div className={styles.styleDivider}></div>

					<Image
						src='/event-mangement.jpg'
						width={'100%'}
						height='80%'
						layout='responsive'
					/>
				</Col>
				<Col md={6} className={styles.eventManagementData}>
					<div className={styles.dataWrapper}>
						<p className={styles.heading}>Why ZES</p>
						<p className={styles.subHeading}>
							Events <span>Management Solutions</span>
						</p>
						<br />
						<p className={styles.description}>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullam corper suscipit lobortis nisl ut aliquip ex ea
							commodo consequat. Lorem ipsum dolor sit amet, consectetuer
							adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
						</p>
						<p className={styles.description}>
							corrupti dolore illum doloremque hic dignissimos explicabo?
							Voluptates incidunt expedita hic. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Totam voluptatibus veniam impedit
							officia obcaecati atque soluta eum magni? Dicta ab culpa nesciunt
							at saepe pariatur dolorem cupiditate! Vitae, veritatis possimus!
						</p>
					</div>
				</Col>
			</Row>
			{/* </ContainerComponent> */}
			<br />
			<br />
			<br />
		</section>
	);
}
