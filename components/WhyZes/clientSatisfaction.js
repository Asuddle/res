import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import Image from 'next/image';
import styles from '../../styles/why-zes.module.scss';

export default function ClientSatisfaction() {
	return (
		<ContainerComponent>
			<div className={styles.clientSatisfaction}>
				<Row>
					<Col md={6} className={styles.dataPortion}>
						<div className={styles.dataWrapper}>
							<div className={styles.verticalDivider}></div>
							<p className={styles.heading}>THRIVING ON</p>
							<p className={styles.subHeading}>
								Client <span>Satisfaction</span>
							</p>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullam corper suscipit lobortis nisl ut
								aliquip ex ea com modo consequat. Lorem ipsum dolor sit amet,
								consec tetuer adipiscing elit, sed diam nonummy nibh euis mod
								tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
								enim ad minim veniam, quis nostrud exerci tation ullam corper
								suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</Col>
					<Col
						style={{ padding: '0px' }}
						md={6}
						className={styles.imagePortion}
					>
						<Image
							src='/person.jpg'
							width='100%'
							height='100%'
							alt='client'
							layout='responsive'
						/>
					</Col>
				</Row>
			</div>
		</ContainerComponent>
	);
}
