import styles from "./MealIngredients.module.scss";
import { useSelector } from "react-redux";
import { selectMealDetailsData } from "../../redux/meal_details/mealDetailsSelectors";

const MealIngredients = () => {
	const details = useSelector(selectMealDetailsData);

	return (
		<ul className={styles.ul}>
			{details.extendedIngredients.map((ingredient, index) => (
				<li className={styles.li} key={index}>
					{ingredient.original}
				</li>
			))}
		</ul>
	);
};

export default MealIngredients;
