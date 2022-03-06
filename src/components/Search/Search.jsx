import styles from "./Search.module.scss";
import {
	selectSearchDiet,
	selectSearchDietCurrentOption,
	selectSearchDietOptions,
	selectSearchInputValue,
	selectSearchIsLoading,
	selectSearchMealType,
	selectSearchMealTypeCurrentOption,
	selectSearchMealTypeOptions
} from "../../redux/search/searchSelectors";
import {
	setSearchDiet,
	setSearchInputValue,
	setSearchMealType
} from "../../redux/search/searchSlice";
import Dropdown from "../Dropdown/Dropdown";
import { fetchMeals } from "../../redux/search/searchThunks";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(selectSearchIsLoading);
	const inputValue = useSelector(selectSearchInputValue);
	const mealType = useSelector(selectSearchMealType);
	const diet = useSelector(selectSearchDiet);
	const mealTypeCurrentOption = useSelector(selectSearchMealTypeCurrentOption);
	const dietCurrentOption = useSelector(selectSearchDietCurrentOption);
	const mealTypeOptions = useSelector(selectSearchMealTypeOptions);
	const dietOptions = useSelector(selectSearchDietOptions);

	const handleInputChange = (e) => dispatch(setSearchInputValue(e.target.value));

	const handleMealTypeChange = (option) => dispatch(setSearchMealType(option?.label));

	const handleDietChange = (option) => dispatch(setSearchDiet(option?.label));

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			fetchMeals({
				query: inputValue,
				mealType,
				diet
			})
		);
	};

	return (
		<>
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
			<div className={styles.selects}>
				<Dropdown
					className={styles.select}
					placeholder="Meal type"
					value={mealTypeCurrentOption}
					options={mealTypeOptions}
					onChange={handleMealTypeChange}
					form="#search"
				/>
				<Dropdown
					className={styles.select}
					placeholder="Diet"
					value={dietCurrentOption}
					options={dietOptions}
					onChange={handleDietChange}
					form="#search"
				/>
			</div>
		</>
	);
};

export default Search;
