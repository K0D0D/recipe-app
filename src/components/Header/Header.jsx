import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { useRef, useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
	const user = useSelector(selectAuthUser);
	const [profileIsOpen, setProfileIsOpen] = useState(false);
	const profileRef = useRef();

	const checkActiveClassName = ({ isActive }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};

	const toggleProfileIsOpen = () => setProfileIsOpen(!profileIsOpen);

	useOutsideClick(profileRef, () => {
		if (profileIsOpen) setProfileIsOpen(false);
	});

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
					<div className={styles.user}>
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
					</div>
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
