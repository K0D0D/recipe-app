import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";

const store = configureStore({
	reducer: {
		search: searchSlice
	}
});

export default store;
