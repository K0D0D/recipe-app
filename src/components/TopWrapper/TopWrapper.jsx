import styles from "./TopWrapper.module.scss";

const TopWrapper = ({ title, children }) => (
	<div className={styles.wrapper}>
		{title && <h1 className={styles.title}>{title}</h1>}
		{children}
	</div>
);

export default TopWrapper;
