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
	setSearchMealType,
	setSearchParams
} from "../../redux/search/searchSlice";
import Dropdown from "../Dropdown/Dropdown";
import { fetchMeals } from "../../redux/search/searchThunks";
import { useDispatch, useSelector } from "react-redux";
import TopWrapperForm from "../TopWrapperForm/TopWrapperForm";

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

		const searchParams = {
			query: inputValue,
			mealType,
			diet
		};

		dispatch(setSearchParams(searchParams));

		dispatch(fetchMeals(searchParams));
	};

	const clearInput = () => dispatch(setSearchInputValue(""));

	return (
		<>
			<TopWrapperForm
				onSubmit={handleSubmit}
				onChange={handleInputChange}
				placeholder="What recipe are you looking for?"
				inputValue={inputValue}
				buttonIcon={<span className="material-icons-round">search</span>}
				disabled={isLoading}
				onClearButtonClick={clearInput}
			/>
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
