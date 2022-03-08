import { createSelector } from "@reduxjs/toolkit";

const selectMealDetails = (state) => state.mealDetails;

export const selectMealDetailsData = createSelector(
    [selectMealDetails],
    mealDetails => mealDetails.data
);

export const selectMealDetailsIsLoading = createSelector(
    [selectMealDetails],
    mealDetails => mealDetails.isLoading
);

export const selectMealDetailsError = createSelector(
    [selectMealDetails],
    mealDetails => mealDetails.error
);