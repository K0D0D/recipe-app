import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";
import mealDetailsSlice from "./meal_details/mealDetailsSlice";
import authSlice from "./auth/authSlice";
import bookmarksSlice from "./bookmarks/bookmarksSlice";

const store = configureStore({
	reducer: {
		search: searchSlice,
		mealDetails: mealDetailsSlice,
		auth: authSlice,
		bookmarks: bookmarksSlice
	}
});

export default store;
