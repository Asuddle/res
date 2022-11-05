import ContainerComponent from '../container';
import styles from '../../styles/About.module.scss';
export default function CEOMessage() {
	return (
		<section className={styles.ceoMessageWrapper}>
			<ContainerComponent>
				<div className={styles.ceoMessage}></div>
			</ContainerComponent>
		</section>
	);
}
