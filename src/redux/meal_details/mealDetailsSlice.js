import { createSlice } from "@reduxjs/toolkit";
import { fetchMealDetails } from "./mealDetailsThunks";

const initialState = {
	data: null,
	isLoading: false,
	error: null
};

const detailsSlice = createSlice({
	name: "details",
	initialState,
	extraReducers: {
		[fetchMealDetails.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchMealDetails.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.data = payload;
		},
		[fetchMealDetails.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
			state.data = null;
		}
	}
});

const { reducer } = detailsSlice;

export default reducer;
