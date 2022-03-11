import { createSlice } from "@reduxjs/toolkit";
import { addBookmark, removeBookmark, checkBookmark, fetchBookmarks } from "./bookmarksThunks";

const initialState = {
    isItBookmark: false,
    bookmarksList: [],
    isLoading: false,
    error: null
};

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    extraReducers: {
        [addBookmark.pending]: (state) => {
            state.isLoading = true;
        },
        [addBookmark.fulfilled]: (state) => {
            state.isLoading = false;
            state.isItBookmark = true;
            state.error = null;
        },
        [addBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [removeBookmark.pending]: (state) => {
            state.isLoading = true;
        },
        [removeBookmark.fulfilled]: (state) => {
            state.isLoading = false;
            state.isItBookmark = false;
        },
        [removeBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [checkBookmark.pending]: (state) => {
            state.isLoading = true;
        },
        [checkBookmark.fulfilled]: (state, { payload }) => {
            state.isItBookmark = payload;
            state.isLoading = false;
        },
        [checkBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [fetchBookmarks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBookmarks.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.bookmarksList = payload;
        },
        [fetchBookmarks.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.bookmarksList = [];
        }
    }
});

const { reducer } = bookmarksSlice;

export default reducer;