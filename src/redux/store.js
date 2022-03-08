import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";
import mealDetailsSlice from "./meal_details/mealDetailsSlice";

const store = configureStore({
	reducer: {
		search: searchSlice,
		mealDetails: mealDetailsSlice
	}
});

export default store;
