import styles from "./MealDirections.module.scss";
import { useSelector } from "react-redux";
import { selectMealDetailsData } from "../../redux/meal_details/mealDetailsSelectors";

const MealDirections = () => {
	const details = useSelector(selectMealDetailsData);

	return (
		<ul className={styles.ul}>
			{details.analyzedInstructions.length
				? details.analyzedInstructions[0].steps.map((step, index) => (
						<li className={styles.li} key={index}>
							{step.step}
						</li>
				  ))
				: "There are no directions for this meal."}
		</ul>
	);
};

export default MealDirections;
