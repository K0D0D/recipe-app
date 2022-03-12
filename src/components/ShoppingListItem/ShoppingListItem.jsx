import { useDispatch } from "react-redux";
import { forwardRef } from "react";
import {
	deleteShoppingListItem,
	toggleShoppingListItemComplete
} from "../../redux/shopping_list/shoppingListThunks";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./ShoppingListItem.module.scss";

const ShoppingListItem = forwardRef(({ id, title, completed }, ref) => {
	const dispatch = useDispatch();

	const handleChange = () => {
		dispatch(toggleShoppingListItemComplete({ id, completed }));
	};

	const handleDelete = () => dispatch(deleteShoppingListItem(id));

	return (
		<li className={styles.li} ref={ref}>
			<Checkbox
				className={styles.label}
				checkedClassName={styles.labelChecked}
				onChange={handleChange}
				checked={completed}
			>
				{title}
			</Checkbox>
			<button className={styles.btn} onClick={handleDelete}>
				<span className="material-icons-round">delete_forever</span>
			</button>
		</li>
	);
});

export default ShoppingListItem;
