import { createSelector } from "@reduxjs/toolkit";

const selectBookmarks = (state) => state.bookmarks;

export const selectIsItBookmark = createSelector(
	[selectBookmarks],
	(bookmarks) => bookmarks.isItBookmark
);

export const selectBookmarksIsLoading = createSelector(
	[selectBookmarks],
	(bookmarks) => bookmarks.isLoading
);

export const selectBookmarksError = createSelector(
	[selectBookmarks],
	(bookmarks) => bookmarks.error
);

export const selectBookmarksList = createSelector(
    [selectBookmarks],
    (bookmarks) => bookmarks.bookmarksList
);