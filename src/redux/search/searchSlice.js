import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals, fetchRandomMeals } from "./searchThunks";

const initialState = {
	inputValue: "",
	searchResults: [],
	isLoading: false,
	error: null
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchInputValue: (state, { payload }) => {
			state.inputValue = payload;
		}
	},
	extraReducers: {
		[fetchMeals.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchMeals.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.searchResults = payload.results;
		},
		[fetchMeals.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
			state.searchResults = [];
		},
		[fetchRandomMeals.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchRandomMeals.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.searchResults = payload.recipes;
		},
		[fetchRandomMeals.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
			state.searchResults = [];
		}
	}
});

const { actions, reducer } = searchSlice;

export const { setSearchInputValue } = actions;

export default reducer;
