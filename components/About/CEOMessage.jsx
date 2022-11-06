import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import Image from 'next/image';
import styles from '../../styles/About.module.scss';

export default function CEOMessage() {
	return (
		<section className={styles.ceoMessageWrapper}>
			<ContainerComponent>
				<Row className={styles.ceoMessage}>
					<Col md={4} className={styles.dataPortion}>
						<p className={styles.ceoName}>Name Here</p>
						<p>Designation Here</p>
						<p className={styles.ceoWhoWeAre}>
							Who we are? <br />
							Creative <br />
							visionaries...
						</p>
					</Col>
					<Col md={8} className={styles.imagePortion}>
						<Image
							src='/ceo.jpg'
							alt='ceo'
							// width='100%'
							// height='100%'
							layout='fill'
							// layout='responsive'
						/>
						<div className={styles.ceoMessage}>
							<p className={styles.heading}>Message from CEO</p>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullam corper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat.
								<br />
								<br />
								Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullam corper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</Col>
				</Row>
			</ContainerComponent>
		</section>
	);
}
