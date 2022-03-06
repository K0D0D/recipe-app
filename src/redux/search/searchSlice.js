import { createSlice } from "@reduxjs/toolkit";
import { fetchMeals, fetchRandomMeals } from "./searchThunks";

const initialState = {
	inputValue: "",
	mealTypesList: [
		"Main course",
		"Side dish",
		"Dessert",
		"Appetizer",
		"Salad",
		"Bread",
		"Breakfast",
		"Soup",
		"Beverage",
		"Sauce",
		"Marinade",
		"Fingerfood",
		"Snack",
		"Drink"
	],
	dietsList: [
		"Gluten Free",
		"Ketogenic",
		"Vegetarian",
		"Lacto-Vegetarian",
		"Ovo-Vegetarian",
		"Vegan",
		"Pescetarian",
		"Paleo",
		"Primal",
		"Whole30"
	],
	mealType: "",
	diet: "",
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
		},
		setSearchMealType: (state, { payload }) => {
			state.mealType = payload;
		},
		setSearchDiet: (state, { payload }) => {
			state.diet = payload;
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

export const { setSearchInputValue, setSearchMealType, setSearchDiet } = actions;

export default reducer;
