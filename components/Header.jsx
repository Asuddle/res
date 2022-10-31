import { Col, Row } from 'reactstrap';
import {
	faFacebook,
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './Navigation';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.scss';

function Header({
	title = 'We Are Zes',
	member = '2500+',
	members = 'MEMBERS',
}) {
	return (
		<div className={styles.bannerWrapper}>
			<Navigation />
			<Row className={styles.container}>
				<Col md={11} className={styles.siteData}>
					<p className={styles.weZes}>{title}</p>
					<p className={styles.totalMember}>{member}</p>
					<p className={styles.member}>{members}</p>
				</Col>
				<Col className={styles.socialIcons}>
					<FontAwesomeIcon icon={faFacebookF} />
					<br />
					<FontAwesomeIcon icon={faInstagram} />
					<br />

					<FontAwesomeIcon icon={faYoutube} />
					<br />

					<FontAwesomeIcon icon={faTwitter} />
					<br />
					<FontAwesomeIcon icon={faLinkedinIn} />
					<div></div>
				</Col>
			</Row>
		</div>
	);
}

export default Header;
