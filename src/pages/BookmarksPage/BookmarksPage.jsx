import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";
import {
	selectBookmarksError,
	selectBookmarksIsLoading,
    selectBookmarksList
} from "../../redux/bookmarks/bookmarksSelectors";
import Meals from "../../components/Meals/Meals";
import { fetchBookmarks } from "../../redux/bookmarks/bookmarksThunks";

const BookmarksPage = () => {
	const dispatch = useDispatch();
    const bookmarksList = useSelector(selectBookmarksList);
	const isLoading = useSelector(selectBookmarksIsLoading);
	const error = useSelector(selectBookmarksError);

	useEffect(() => {
        dispatch(fetchBookmarks());
    }, [dispatch]);

	return (
		<BottomWrapper title="My bookmarks">
			<Meals
				mealsList={bookmarksList}
				skeletonsCount={25}
				isLoading={isLoading}
				error={error}
			/>
		</BottomWrapper>
	);
};

export default BookmarksPage;
