import styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Footer from "./components/Footer/Footer";
import MealPage from "./pages/MealPage/MealPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRandomMeals } from "./redux/search/searchThunks";
import { checkUserAuth } from "./redux/auth/authThunks";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRandomMeals());
	}, [dispatch]);

	useEffect(() => {
		dispatch(checkUserAuth());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<Router>
				<Header />
				<main className={styles.main}>
					<Routes>
						<Route path="/" exact element={<HomePage />} />
						<Route
							path="/bookmarks"
							exact
							element={
								<PrivateRoute>
									<BookmarksPage />
								</PrivateRoute>
							}
						/>
						<Route
							path="/shopping-list"
							exact
							element={
								<PrivateRoute>
									<ShoppingListPage />
								</PrivateRoute>
							}
						/>
						<Route path="/auth" exact element={<AuthPage />} />
						<Route path="/meal/:id" exact element={<MealPage />} />
						<Route path="*" exact element={<Navigate to="/" />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
