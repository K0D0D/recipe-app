import styles from "./MealInfo.module.scss";
import { useSelector } from "react-redux";
import { selectMealDetailsData } from "../../redux/meal_details/mealDetailsSelectors";
import imagePlaceholder from "../../assets/placeholder.jpg";

const MealInfo = () => {
	const details = useSelector(selectMealDetailsData);

	return (
		<>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					src={details.image || imagePlaceholder}
					alt={details.title}
				/>
				<button className={styles.bookmark}>
					<span className="material-icons-round">bookmark</span>
				</button>
			</div>
			<div className={styles.infoContainer}>
				<p className={styles.info}>
					<span className={styles.amount}>{details.readyInMinutes}</span>
					<span className={styles.unit}>minutes</span>
				</p>
				<p className={styles.info}>
					<span className={styles.amount}>{details.servings}</span>
					<span className={styles.unit}>servings</span>
				</p>
				<p className={styles.info}>
					<span className={styles.amount}>
						{details.nutrition.nutrients[0].amount}
					</span>
					<span className={styles.unit}>kcal</span>
				</p>
			</div>
			<div className={styles.tags}>
				{!!details.diets.length &&
					details.diets.map((diet, index) => (
						<span className={styles.tag} key={index}>
							#{diet}
						</span>
					))}
				{!!details.dishTypes.length &&
					details.dishTypes.map((type, index) => (
						<span className={styles.tag} key={index}>
							#{type}
						</span>
					))}
			</div>
		</>
	);
};

export default MealInfo;
