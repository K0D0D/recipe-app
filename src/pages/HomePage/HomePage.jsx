import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";
import TopWrapper from "../../components/TopWrapper/TopWrapper";
import Search from "../../components/Search/Search";
import { useSelector } from "react-redux";
import {
	selectSearchError,
	selectSearchIsLoading,
	selectSearchResults
} from "../../redux/search/searchSelectors";
import Meals from "../../components/Meals/Meals";

const HomePage = () => {
	const searchResults = useSelector(selectSearchResults);
	const isLoading = useSelector(selectSearchIsLoading);
	const error = useSelector(selectSearchError);

	return (
		<>
			<TopWrapper title="Search for Recipes">
				<Search />
			</TopWrapper>
			<BottomWrapper title="Results">
				<Meals mealsList={searchResults} isLoading={isLoading} error={error} />
			</BottomWrapper>
		</>
	);
};

export default HomePage;
