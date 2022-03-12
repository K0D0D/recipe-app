import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import BottomWrapper from "../../components/BottomWrapper/BottomWrapper";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import ShoppingListForm from "../../components/ShoppingListForm/ShoppingListForm";
import TopWrapper from "../../components/TopWrapper/TopWrapper";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseUtils";
import {
	setShoppingListError,
	setShoppingListItems
} from "../../redux/shopping_list/shoppingListSlice";

const ShoppingListPage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthUser);
	const snapshotUnsubscribeRef = useRef();

	useEffect(() => {
		if (user) {
			const q = query(
				collection(db, `users/${user.uid}/shopping_list`),
				orderBy("completed", "asc"),
				orderBy("timestamp", "desc")
			);

			snapshotUnsubscribeRef.current = onSnapshot(
				q,
				(snapshot) => {
					dispatch(
						setShoppingListItems(
							snapshot.docs.map((doc) => {
								const { id, completed, title } = doc.data();

								return { id, completed, title };
							})
						)
					);
				},
				(error) => dispatch(setShoppingListError(error.message))
			);
		}

		return () => snapshotUnsubscribeRef.current?.();
	}, [user, dispatch]);

	return (
		<>
			<TopWrapper title="My Shopping List">
				<ShoppingListForm />
			</TopWrapper>
			<BottomWrapper title="Ingredients">
				<ShoppingList />
			</BottomWrapper>
		</>
	);
};

export default ShoppingListPage;
