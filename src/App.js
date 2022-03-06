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

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRandomMeals());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<Router>
				<Header />
				<main className={styles.main}>
					<Routes>
						<Route path="/" exact element={<HomePage />} />
						<Route path="/bookmarks" exact element={<BookmarksPage />} />
						<Route
							path="/shopping-list"
							exact
							element={<ShoppingListPage />}
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
