import styles from "./Search.module.scss";
import {
	selectSearchInputValue,
	selectSearchIsLoading
} from "../../redux/search/searchSelectors";
import { setSearchInputValue } from "../../redux/search/searchSlice";
import { fetchMeals } from "../../redux/search/searchThunks";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(selectSearchIsLoading);
	const inputValue = useSelector(selectSearchInputValue);

	const handleInputChange = (e) => dispatch(setSearchInputValue(e.target.value));

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(fetchMeals(inputValue));
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				placeholder="What recipe are you looking for?"
				onChange={handleInputChange}
				value={inputValue}
				type="text"
			/>
			<button className={styles.button} disabled={isLoading}>
				<span className="material-icons-round">search</span>
			</button>
		</form>
	);
};

export default Search;
