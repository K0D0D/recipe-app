import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { useRef, useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import useOutsideClick from "../../hooks/useOutsideClick";
import MobileMenu from "../MobileMenu/MobileMenu";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import FocusLock from "react-focus-lock";

const Header = () => {
	const user = useSelector(selectAuthUser);
	const [profileIsOpen, setProfileIsOpen] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const profileRef = useRef();
	const menuRef = useRef();

	const checkActiveClassName = ({ isActive }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	const toggleProfileIsOpen = () => setProfileIsOpen(!profileIsOpen);

	const openMenu = () => setMenuIsOpen(true);

	const closeMenu = () => setMenuIsOpen(false);

	useOutsideClick(profileRef, () => {
		if (profileIsOpen) setProfileIsOpen(false);
	});

	useOutsideClick(menuRef, () => {
		if (menuIsOpen) setMenuIsOpen(false);
	});

	useLockBodyScroll(menuIsOpen);

	return (
		<header className={styles.header}>
			<button className={styles.menuBtn} onClick={openMenu}>
				<span className="material-icons-round">menu</span>
			</button>
			<nav className={styles.primaryNav}>
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
			<nav className={styles.secondaryNav}>
				{user ? (
					<FocusLock
						className={styles.user}
						disabled={!profileIsOpen}
						autoFocus
						returnFocus	
					>
						<button
							className={styles.profileBtn}
							onClick={toggleProfileIsOpen}
						>
							{user.profilePic ? (
								<img
									className={styles.userAvatar}
									src={user.profilePic}
									alt=""
								/>
							) : (
								<span className={styles.userAvatar}>
									{user.name[0].toUpperCase()}
								</span>
							)}
						</button>
						<UserProfile isOpen={profileIsOpen} profileRef={profileRef} />
					</FocusLock>
				) : (
					<NavLink to="/auth" className={checkActiveClassName}>
						<span className="material-icons-round">person</span>
						Login
					</NavLink>
				)}
			</nav>
			<MobileMenu isOpen={menuIsOpen} onCloseClick={closeMenu} menuRef={menuRef} />
		</header>
	);
};

export default Header;
