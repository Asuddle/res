import { Col, Row } from 'reactstrap';

import ContainerComponent from '../container';
import styles from '../../styles/About.module.scss';

export default function FounderMessage() {
	return (
		<section className={styles.founderMessageWrapper}>
			<ContainerComponent>
				<div className={styles.founderMessage}>
					<Row className={styles.internalFounderRow}>
						<Col md={6}></Col>
						<Col md={6}></Col>
					</Row>
				</div>
			</ContainerComponent>
		</section>
	);
}
