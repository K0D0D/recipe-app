import { createSlice } from "@reduxjs/toolkit";
import {
	addShoppingListItem,
	addShoppingListItems,
	deleteShoppingListItem,
	toggleShoppingListItemComplete
} from "./shoppingListThunks";

const initialState = {
	listItems: [],
	checkedItems: [],
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
		},
		addShoppingListCheckedItem: (state, { payload }) => {
			const checkedItem = {
				id: payload.id,
				title: payload.title
			};

			state.checkedItems.push(checkedItem);
		},
		deleteShoppingListCheckedItem: (state, { payload }) => {
			state.checkedItems = state.checkedItems.filter((item) => item.id !== payload);
		}
	},
	extraReducers: {
		[addShoppingListItems.pending]: (state) => {
			state.isLoading = true;
		},
		[addShoppingListItems.fulfilled]: (state) => {
			state.isLoading = false;
			state.error = null;
			state.checkedItems = [];
		},
		[addShoppingListItems.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
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
	setShoppingListError,
	addShoppingListCheckedItem,
	deleteShoppingListCheckedItem
} = actions;

export default reducer;
