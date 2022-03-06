import Skeleton from "../Skeleton/Skeleton";
import styles from "./MealCard.module.scss";

const MealCardSkeleton = () => (
    <div className={styles.card}>
        <Skeleton width="100%" height="16em">
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="10em" />
            <rect x="1em" y="11.5em" rx="4" ry="4" width="calc(100% - 2em)" height="1.1em" />
            <rect x="1em" y="13.3em" rx="4" ry="4" width="calc(100% - 4em)" height="1.1em" />
        </Skeleton>
    </div>
);

export default MealCardSkeleton;