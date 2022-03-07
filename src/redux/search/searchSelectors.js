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

export const selectSearchMealType = createSelector(
    [selectSearch],
    search => search.mealType
);

export const selectSearchDiet = createSelector(
    [selectSearch],
    search => search.diet
);

export const selectSearchMealTypeCurrentOption = createSelector(
    [selectSearchMealType],
    mealType => mealType && {
        value: mealType.toLowerCase(),
        label: mealType
    } 
);

export const selectSearchDietCurrentOption = createSelector(
    [selectSearchDiet],
    diet => diet && {
        value: diet.toLowerCase(),
		label: diet
    }
);

export const selectSearchMealTypeOptions = createSelector(
    [selectSearch],
    search => search.mealTypesList.map(mealType => ({
        value: mealType.toLowerCase(),
        label: mealType
    }))
);

export const selectSearchDietOptions = createSelector(
    [selectSearch],
    search => search.dietsList.map(diet => ({
        value: diet.toLowerCase(),
        label: diet
    }))
);

export const selectSearchPageSize = createSelector(
    [selectSearch],
    search => search.pageSize
);

export const selectSearchCurrentPage = createSelector(
    [selectSearch],
    search => search.currentPage
);

export const selectSearchHasMorePages = createSelector(
    [selectSearch],
    search => search.hasMorePages
);

export const selectSearchParams = createSelector(
    [selectSearch],
    search => search.searchParams
);