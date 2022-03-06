import styles from "./BottomWrapper.module.scss";

const BottomWrapper = ({ title, children }) => (
	<div className={styles.wrapper}>
		{title && <h2 className={styles.title}>{title}</h2>}
		{children}
	</div>
);

export default BottomWrapper;
