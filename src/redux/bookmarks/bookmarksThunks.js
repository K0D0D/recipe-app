import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	db
} from "../../firebase/firebaseUtils";
import {
	doc,
	serverTimestamp,
	setDoc,
	deleteDoc,
	getDoc,
    query,
    collection,
    orderBy,
    getDocs
} from "firebase/firestore";
import { toast } from "react-toastify";

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

			toast.success("Bookmark added");
		} catch (err) {
			toast.error("Something went wrong");

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

			toast.success("Bookmark  removed");
		} catch (err) {
			toast.error("Something went wrong");

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

export const fetchBookmarks = createAsyncThunk(
	"bookmarks/fetchBookmarks",
	async (_, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const q = query(
				collection(db, `users/${uid}/bookmarks`),
				orderBy("timestamp", "desc")
			);

			const querySnap = await getDocs(q);

			const docs = querySnap.docs.map((doc) => {
				const { id, image, title } = doc.data();

				return { id, image, title };
			});

			return docs;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);