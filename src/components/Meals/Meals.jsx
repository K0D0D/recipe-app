import MealCard from "../MealCard/MealCard";
import styles from "./Meals.module.scss";
import imagePlaceholder from "../../assets/placeholder.jpg";
import MealCardSkeleton from "../MealCard/MealCardSkeleton";

const Meals = ({ mealsList, isLoading, error }) => (
	<div className={styles.inner}>
		{isLoading ? (
			Array.from(Array(25), (_, i) => <MealCardSkeleton key={i} />)
		) : mealsList?.length ? (
			mealsList.map((meal) => (
				<MealCard
					name={meal.title}
					image={meal.image || imagePlaceholder}
					id={meal.id}
					key={meal.id}
				/>
			))
		) : (
			<p className={styles.message}>{error || "There are no meals"}</p>
		)}
	</div>
);

export default Meals;
