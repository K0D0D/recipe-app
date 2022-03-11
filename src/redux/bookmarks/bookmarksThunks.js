import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	db
} from "../../firebase/firebaseUtils";
import {
	doc,
	serverTimestamp,
	setDoc,
	deleteDoc,
	getDoc
} from "firebase/firestore";

export const addBookmark = createAsyncThunk(
	"bookmarks/addBookmark",
	async ({ id, image, title }, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const bookmarkDocRef = doc(db, `users/${uid}/bookmarks/${id}`);

			await setDoc(bookmarkDocRef, {
				id,
				image,
				title,
				timestamp: serverTimestamp()
			});
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const removeBookmark = createAsyncThunk(
	"bookmarks/removeBookmark",
	async (id, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const bookmarkDocRef = doc(db, `users/${uid}/bookmarks/${id}`);

			await deleteDoc(bookmarkDocRef);
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const checkBookmark = createAsyncThunk(
	"bookmarks/checkBookmark",
	async (id, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const bookmarkDocRef = doc(db, `users/${uid}/bookmarks/${id}`);

			const bookmarkDocSnap = await getDoc(bookmarkDocRef);

			return bookmarkDocSnap.exists();
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);