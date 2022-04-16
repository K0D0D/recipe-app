import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { selectMealDetailsData } from "../../redux/meal_details/mealDetailsSelectors";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import styles from "./MealIngredients.module.scss";
import {
	addShoppingListCheckedItem,
	deleteShoppingListCheckedItem,
	deleteShoppingListCheckedItems
} from "../../redux/shopping_list/shoppingListSlice";
import {
	selectShoppingListCheckedItems,
	selectShoppingListIsLoading
} from "../../redux/shopping_list/shoppingListSelectors";
import { toast } from "react-toastify";
import { addShoppingListItems } from "../../redux/shopping_list/shoppingListThunks";

const MealIngredients = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const details = useSelector(selectMealDetailsData);
	const user = useSelector(selectAuthUser);
	const checkedItems = useSelector(selectShoppingListCheckedItems);
	const isLoading = useSelector(selectShoppingListIsLoading);

	const handleChange = (e, index) => {
		if (e.target.checked) {
			dispatch(
				addShoppingListCheckedItem({
					title: e.target.value,
					id: index
				})
			);
		} else {
			dispatch(deleteShoppingListCheckedItem(index));
		}
	};

	const handleClick = () => {
		if (!user) return navigate("/auth");

		if (!checkedItems.length) return toast.error("You haven't chosen anything");

		dispatch(addShoppingListItems(checkedItems));

		dispatch(deleteShoppingListCheckedItems());
	};

	return (
		<>
			<ul className={styles.ul}>
				{details.extendedIngredients.map((ingredient, index) => (
					<li className={`${styles.li}`} key={index}>
						<Checkbox
							checked={checkedItems.some((item) => item.id === index)}
							onChange={(e) => handleChange(e, index)}
						>
							{ingredient.original}
						</Checkbox>
					</li>
				))}
			</ul>
			<Button className={styles.button} onClick={handleClick} disabled={isLoading}>
				Add to shopping list
			</Button>
		</>
	);
};

export default MealIngredients;
