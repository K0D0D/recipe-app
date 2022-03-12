import { createSelector } from "@reduxjs/toolkit";

const selectShoppingList = (state) => state.shoppingList;

export const selectShoppingListInputValue = createSelector(
    [selectShoppingList],
    shoppingList => shoppingList.inputValue
);

export const selectShoppingListItems = createSelector(
    [selectShoppingList],
    shoppingList => shoppingList.listItems
);

export const selectShoppingListIsLoading = createSelector(
    [selectShoppingList],
    shoppingList => shoppingList.isLoading
);

export const selectShoppingListError = createSelector(
    [selectShoppingList],
    shoppingList => shoppingList.error
);