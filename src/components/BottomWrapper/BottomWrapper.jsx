import styles from "./BottomWrapper.module.scss";
import TitleSkeleton from "./TitleSkeleton";

const BottomWrapper = ({ title, showTitleSkeleton, children }) => (
	<div className={styles.wrapper}>
		{title ? (
			<h2 className={styles.title}>{title}</h2>
		) : (
			showTitleSkeleton && <TitleSkeleton />
		)}
		{children}
	</div>
);

export default BottomWrapper;
