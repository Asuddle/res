import styles from '../styles/Home.module.scss';

export default function ContainerComponent({ children }) {
	return <div className={styles.container}>{children}</div>;
}
