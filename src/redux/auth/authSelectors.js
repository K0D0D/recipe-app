import { createSelector } from "@reduxjs/toolkit";

const selectAuth = state => state.auth;

export const selectAuthUser = createSelector(
    [selectAuth],
    auth => auth.user
);

export const selectAuthIsLoading = createSelector(
    [selectAuth],
    auth => auth.isLoading
);

export const selectAuthError = createSelector(
    [selectAuth],
    auth => auth.error
);