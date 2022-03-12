import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseUtils";
import {
	doc,
	serverTimestamp,
	updateDoc,
	setDoc,
	deleteDoc
} from "firebase/firestore";
import { nanoid } from "@reduxjs/toolkit";

export const addShoppingListItem = createAsyncThunk(
	"shoppingList/addShoppingListItem",
	async (title, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;
			const id = nanoid();

			const itemDocRef = doc(db, `users/${uid}/shopping_list/${id}`);

			await setDoc(itemDocRef, {
				id,
				title,
				completed: false,
				timestamp: serverTimestamp()
			});
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const deleteShoppingListItem = createAsyncThunk(
	"shoppingList/deleteShoppingListItem",
	async (id, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const itemDocRef = doc(db, `users/${uid}/shopping_list/${id}`);

			await deleteDoc(itemDocRef);
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const toggleShoppingListItemComplete = createAsyncThunk(
	"shoppingList/toggleShoppingListItemComplete",
	async ({ id, completed }, { getState, rejectWithValue }) => {
		try {
			const { uid } = getState().auth.user;

			const itemDocRef = doc(db, `users/${uid}/shopping_list/${id}`);

			await updateDoc(itemDocRef, { completed: !completed });
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);
