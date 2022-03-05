import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
	const checkActiveClassName = ({ isActive }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

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
				<NavLink to="/auth" className={checkActiveClassName}>
					<span className="material-icons-round">person</span>
					Login
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;