import styles from "./MealPage.module.scss";
import Skeleton from "../../components/Skeleton/Skeleton";
import MealInfoSkeleton from "../../components/MealInfo/MealInfoSkeleton";

const TextSkeleton = ({ rows }) => (
	<Skeleton width="100%" height={rows * 1.8 + "em"}>
		{Array.from(Array(rows), (_, i) => (
			<rect
				x="0"
				y={i * 1.8 + "em"}
				width="100%"
				height="1.3em"
				rx="4"
				ry="4"
				key={i}
			/>
		))}
	</Skeleton>
);

const MealPageSkeleton = () => (
	<>
		<div className={styles.left}>
			<MealInfoSkeleton />
		</div>
		<div className={styles.right}>
			<TextSkeleton rows={12} />
		</div>
	</>
);

export default MealPageSkeleton;
