import { createSlice } from "@reduxjs/toolkit";
import {
	addShoppingListItem,
	deleteShoppingListItem,
	toggleShoppingListItemComplete
} from "./shoppingListThunks";

const initialState = {
	listItems: [],
	inputValue: "",
	isLoading: false,
	error: null
};

const shoppingListSlice = createSlice({
	name: "shoppingList",
	initialState,
	reducers: {
		setShoppingListInputValue: (state, { payload }) => {
			state.inputValue = payload;
		},
		setShoppingListItems: (state, { payload }) => {
			state.listItems = payload;
		},
		setShoppingListError: (state, { payload }) => {
			state.error = payload;
		}
	},
	extraReducers: {
		[addShoppingListItem.pending]: (state) => {
			state.isLoading = true;
		},
		[addShoppingListItem.fulfilled]: (state) => {
			state.isLoading = false;
			state.error = null;
		},
		[addShoppingListItem.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[deleteShoppingListItem.pending]: (state) => {
			state.isLoading = true;
		},
		[deleteShoppingListItem.fulfilled]: (state) => {
			state.isLoading = false;
			state.error = null;
		},
		[deleteShoppingListItem.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[toggleShoppingListItemComplete.pending]: (state) => {
			state.isLoading = true;
		},
		[toggleShoppingListItemComplete.fulfilled]: (state) => {
			state.isLoading = false;
			state.error = null;
		},
		[toggleShoppingListItemComplete.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { reducer, actions } = shoppingListSlice;

export const {
	setShoppingListInputValue,
	setShoppingListItems,
	setShoppingListIsLoading,
	setShoppingListError
} = actions;

export default reducer;
