import { useSelector } from "react-redux";
import {
	selectShoppingListError,
	selectShoppingListItems
} from "../../redux/shopping_list/shoppingListSelectors";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import styles from "./ShoppingList.module.scss";
import FlipMove from "react-flip-move";

const ShoppingList = () => {
	const listItems = useSelector(selectShoppingListItems);
	const error = useSelector(selectShoppingListError);

	return (
		<div className={styles.inner}>
			{listItems?.length ? (
				<ul className={styles.ul}>
					<FlipMove>
						{listItems.map((item) => (
							<ShoppingListItem
								id={item.id}
								title={item.title}
								completed={item.completed}
								key={item.id}
							/>
						))}
					</FlipMove>
				</ul>
			) : (
				<p className={styles.message}>
					{error || "Your shopping list is currently empty"}
				</p>
			)}
		</div>
	);
};

export default ShoppingList;
