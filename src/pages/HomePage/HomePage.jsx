import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";
import TopWrapper from "../../components/TopWrapper/TopWrapper";
import Search from "../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
	selectSearchError,
	selectSearchIsLoading,
	selectSearchResults,
	selectSearchPageSize,
	selectSearchCurrentPage,
	selectSearchHasMorePages,
	selectSearchParams
} from "../../redux/search/searchSelectors";
import Meals from "../../components/Meals/Meals";
import { setSearchCurrentPage } from "../../redux/search/searchSlice";
import { fetchMeals } from "../../redux/search/searchThunks";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
	const dispatch = useDispatch();

	const searchResults = useSelector(selectSearchResults);
	const isLoading = useSelector(selectSearchIsLoading);
	const error = useSelector(selectSearchError);
	const currentPage = useSelector(selectSearchCurrentPage);
	const pageSize = useSelector(selectSearchPageSize);
	const hasMorePages = useSelector(selectSearchHasMorePages);
	const searchParams = useSelector(selectSearchParams);

	const onPageChange = (pageNumber) => {
		const offset = pageSize * pageNumber;

		const paramsWithOffset = { ...searchParams, offset };

		dispatch(setSearchCurrentPage(pageNumber));

		dispatch(fetchMeals(paramsWithOffset));
	};

	return (
		<>
			<TopWrapper title="Search for Recipes">
				<Search />
			</TopWrapper>
			<BottomWrapper title="Results">
				<Meals mealsList={searchResults} skeletonsCount={pageSize} isLoading={isLoading} error={error} />
				{!!searchResults?.length && searchParams && (
					<Pagination
						onPageChange={onPageChange}
						currentPage={currentPage}
						hasMorePages={hasMorePages}
						disabled={isLoading}
					/>
				)}
			</BottomWrapper>
		</>
	);
};

export default HomePage;
