import { createSlice } from "@reduxjs/toolkit";
import { checkUserAuth, loginToApp, registerInApp, logoutOfApp, loginWithGoogle } from "./authThunks";

const initialState = {
	user: null,
	isLoading: false,
	error: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[checkUserAuth.pending]: (state) => {
			state.isLoading = true;
		},
		[checkUserAuth.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.user = payload;
		},
		[checkUserAuth.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[registerInApp.pending]: (state) => {
			state.isLoading = true;
		},
		[registerInApp.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.user = payload;
		},
		[registerInApp.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[loginToApp.pending]: (state) => {
			state.isLoading = true;
		},
		[loginToApp.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.user = payload;
		},
		[loginToApp.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[loginWithGoogle.pending]: (state) => {
			state.isLoading = true;
		},
		[loginWithGoogle.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.user = payload;
		},
		[loginWithGoogle.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[logoutOfApp.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.user = payload;
		}
	}
});

const { reducer } = authSlice;

export default reducer;
