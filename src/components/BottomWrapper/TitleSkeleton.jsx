import Skeleton from "../Skeleton/Skeleton";
import styles from "./BottomWrapper.module.scss";

const TitleSkeleton = () => (
	<div className={styles.titleSkeleton}>
		<Skeleton width="100%" height="100%">
			<rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
		</Skeleton>
	</div>
);

export default TitleSkeleton;
