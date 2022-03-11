import styles from "./MealInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMealDetailsData } from "../../redux/meal_details/mealDetailsSelectors";
import imagePlaceholder from "../../assets/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import {
	selectBookmarksIsLoading,
	selectIsItBookmark
} from "../../redux/bookmarks/bookmarksSelectors";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { addBookmark, removeBookmark } from "../../redux/bookmarks/bookmarksThunks";

const MealInfo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const details = useSelector(selectMealDetailsData);
	const isLoading = useSelector(selectBookmarksIsLoading);
	const isItBookmark = useSelector(selectIsItBookmark);
	const user = useSelector(selectAuthUser);

	const toggleBookmark = () => {
		if (!user) return navigate("/auth");

		if (isItBookmark) {
			dispatch(removeBookmark(details.id));
		} else {
			dispatch(
				addBookmark({
					id: details.id,
					image: details.image || "",
					title: details.title
				})
			);
		}
	};

	return (
		<>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					src={details.image || imagePlaceholder}
					alt={details.title}
				/>
				<button
					className={styles.bookmark}
					onClick={toggleBookmark}
					disabled={isLoading}
				>
					{isItBookmark ? (
						<span className="material-icons-round">bookmark</span>
					) : (
						<span className="material-icons-round">bookmark_border</span>
					)}
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
