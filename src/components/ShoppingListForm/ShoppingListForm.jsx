import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectShoppingListInputValue } from "../../redux/shopping_list/shoppingListSelectors";
import { setShoppingListInputValue } from "../../redux/shopping_list/shoppingListSlice";
import TopWrapperForm from "../TopWrapperForm/TopWrapperForm";
import { addShoppingListItem } from "../../redux/shopping_list/shoppingListThunks";

const ShoppingListForm = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector(selectShoppingListInputValue);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!inputValue.trim().length) return;

		dispatch(addShoppingListItem(inputValue));
		dispatch(setShoppingListInputValue(""));
	};

	const handleInputChange = (e) => dispatch(setShoppingListInputValue(e.target.value));

	const clearInput = () => dispatch(setShoppingListInputValue(""));

	return (
		<TopWrapperForm
			onSubmit={handleSubmit}
			onChange={handleInputChange}
			inputValue={inputValue}
			placeholder="Add your own item"
			buttonIcon={<span className="material-icons-round">add_circle_outline</span>}
			onClearButtonClick={clearInput}
		/>
	);
};

export default ShoppingListForm;
