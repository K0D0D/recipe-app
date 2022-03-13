import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { logoutOfApp } from "../../redux/auth/authThunks";
import FocusLock from "react-focus-lock";

const MobileMenu = ({ isOpen, onCloseClick, menuRef }) => {
	const dispatch = useDispatch();

	const user = useSelector(selectAuthUser);

	const onLogoutClick = () => dispatch(logoutOfApp());

    const checkActiveClassName = (navData) => {
		return navData.isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	return (
		<div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpened : ""}`}>
			<FocusLock
				className={styles.menuContainer}
				disabled={!isOpen}
				autoFocus
				returnFocus
				ref={menuRef}
			>
				<button className={styles.closeBtn} onClick={onCloseClick}>
					<span className="material-icons-round">highlight_off</span>
				</button>
				<nav className={styles.nav}>
					<NavLink to="/" onClick={onCloseClick} className={checkActiveClassName}>
						<span className="material-icons-round">home</span>
						Home
					</NavLink>
					<NavLink
						to="/bookmarks"
						onClick={onCloseClick}
						className={checkActiveClassName}
					>
						<span className="material-icons-round">bookmark_border</span>
						Bookmarks
					</NavLink>
					<NavLink
						to="/shopping-list"
						onClick={onCloseClick}
						className={checkActiveClassName}
					>
						<span className="material-icons-round">format_list_bulleted</span>
						Shopping list
					</NavLink>
					{user ? (
						<button
							className={styles.logout}
							onClick={() => {
								onLogoutClick();
								onCloseClick();
							}}
						>
							<span className="material-icons-round">logout</span>
							Logout
						</button>
					) : (
						<NavLink
							to="/auth"
							className={checkActiveClassName}
							onClick={onCloseClick}
						>
							<span className="material-icons-round">person</span>
							Login
						</NavLink>
					)}
				</nav>
			</FocusLock>
		</div>
	);
};

export default MobileMenu;
