import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import Image from 'next/image';
import styles from '../../styles/About.module.scss';

export default function VisionMissionComponent() {
	return (
		<section className={styles.visionMissionWrapper}>
			<ContainerComponent>
				<Row>
					<Col md={7} className={styles.imageWrap}>
						<div className={styles.horizontalWrapper}></div>

						<Image
							src='/people.jpg'
							layout='responsive'
							width={750}
							alt='people'
							height={400}
						/>
						<div className={styles.imageText}>
							We have ability to organize events to inspire and attract
						</div>
					</Col>
					<Col
						md={5}
						className={styles.dataWrapper}
						style={{ paddingLeft: '5%' }}
					>
						<div className={styles.headingWrapper}>
							<p className={styles.heading}>VISION & MISSION</p>
							<p className={styles.subHeading}>
								ZeS <span>Events Management</span>
							</p>
						</div>
						<p className={styles.description} style={{ paddingRight: '20%' }}>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							tation ullam corper suscipit lobortis nisl ut aliquip ex ea
							commodo consequat.
						</p>
					</Col>
				</Row>
			</ContainerComponent>
		</section>
	);
}
