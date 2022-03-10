import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	db,
	firebaseRegister,
	firebaseLogin,
	signInWithGoogle,
	firebaseLogout,
	getCurrentUser,
	firebaseErrors
} from "../../firebase/firebaseUtils";
import { doc, setDoc } from "firebase/firestore";

export const checkUserAuth = createAsyncThunk(
	"auth/checkUserAuth",
	async (_, { rejectWithValue }) => {
		try {
			const user = await getCurrentUser();

			if (user) {
				return {
					email: user.email,
					uid: user.uid
				};
			} else {
				return null;
			}
		} catch (err) {
			return rejectWithValue(firebaseErrors[err.code] || err.message);
		}
	}
);

export const registerInApp = createAsyncThunk(
	"auth/registerInApp",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const { user } = await firebaseRegister(email, password);

			await setDoc(doc(db, "users", user.uid), { uid: user.uid, email });

			return {
				email,
				uid: user.uid
			};
		} catch (err) {
			return rejectWithValue(firebaseErrors[err.code] || err.message);
		}
	}
);

export const loginToApp = createAsyncThunk(
	"auth/loginToApp",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const { user } = await firebaseLogin(email, password);

			return {
				email,
				uid: user.uid
			};
		} catch (err) {
			return rejectWithValue(firebaseErrors[err.code] || err.message);
		}
	}
);

export const loginWithGoogle = createAsyncThunk(
	"auth/loginWIthGoogle",
	async (_, { rejectWithValue }) => {
		try {
			const { user } = await signInWithGoogle();

			await setDoc(doc(db, "users", user.uid), {
				uid: user.uid,
				email: user.email
			});

			return {
				email: user.email,
				uid: user.uid
			};
		} catch (err) {
			return rejectWithValue(firebaseErrors[err.code] || err.message);
		}
	}
);

export const logoutOfApp = createAsyncThunk(
	"auth/logoutOfApp",
	async (_, { rejectWithValue }) => {
		try {
			await firebaseLogout();

			return null;
		} catch (err) {
			return rejectWithValue(firebaseErrors[err.code] || err.message);
		}
	}
);
