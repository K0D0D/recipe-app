import styles from "./MealInfo.module.scss";
import Skeleton from "../Skeleton/Skeleton";

const MealInfoSkeleton = () => (
	<div className={styles.imageContainer}>
		<Skeleton className={styles.image} width="100%" height="100%">
			<rect x="0" y="0" rx="1em" ry="1em" width="100%" height="100%" />
		</Skeleton>
	</div>
);

export default MealInfoSkeleton;
