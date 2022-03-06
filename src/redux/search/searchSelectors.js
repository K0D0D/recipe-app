import { createSelector } from "@reduxjs/toolkit";

const selectSearch = (state) => state.search;

export const selectSearchInputValue = createSelector(
    [selectSearch],
    search => search.inputValue
);

export const selectSearchResults = createSelector(
    [selectSearch],
    search => search.searchResults
);

export const selectSearchIsLoading = createSelector(
    [selectSearch],
    search => search.isLoading
);

export const selectSearchError = createSelector(
    [selectSearch],
    search => search.error
);