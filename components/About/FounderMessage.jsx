import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import Image from 'next/image';
import styles from '../../styles/About.module.scss';

export default function FounderMessage() {
	return (
		<section className={styles.founderMessageWrapper}>
			<ContainerComponent container='smallContainer'>
				<div className={styles.founderMessage}>
					<Row className={styles.internalFounderRow}>
						<Col md={6} className={styles.founderImage}>
							<Image
								src='/founder.jpg'
								width={400}
								height={400}
								style={{ borderRadius: '14px' }}
								alt='founder'
							/>
							<div className={styles.socialMedia}></div>
						</Col>
						<Col md={6}>
							<p className={styles.founderHeading}>Zuyyana Zaidi</p>
							<p>Zes Founder</p>
							<p className={styles.founderMessageHeading}>
								Message from founder
							</p>
							<p className={styles.description} style={{ paddingRight: '20%' }}>
								Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullam corper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat. <br />
								<br />
								Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullam corper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat.
							</p>
						</Col>
					</Row>
				</div>
			</ContainerComponent>
		</section>
	);
}
