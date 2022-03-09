import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { logoutOfApp } from "../../redux/auth/authThunks";

const Header = () => {
	const user = useSelector(selectAuthUser);
	const dispatch = useDispatch();

	const checkActiveClassName = ({ isActive }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	const onLogoutClick = () => dispatch(logoutOfApp());

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink to="/" className={checkActiveClassName}>
					<span className="material-icons-round">home</span>
					Home
				</NavLink>
				<NavLink to="/bookmarks" className={checkActiveClassName}>
					<span className="material-icons-round">bookmark_border</span>
					Bookmarks
				</NavLink>
				<NavLink to="/shopping-list" className={checkActiveClassName}>
					<span className="material-icons-round">format_list_bulleted</span>
					Shopping list
				</NavLink>
			</nav>
			<nav className={styles.nav}>
				{user ? (
					<button className={styles.logout} onClick={onLogoutClick}>
						<span className="material-icons-round">logout</span>
						Logout
					</button>
				) : (
					<NavLink to="/auth" className={checkActiveClassName}>
						<span className="material-icons-round">person</span>
						Login
					</NavLink>
				)}
			</nav>
		</header>
	);
};

export default Header;
