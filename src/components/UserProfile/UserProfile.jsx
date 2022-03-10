import styles from "./UserProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/authSelectors";
import { logoutOfApp } from "../../redux/auth/authThunks";

const UserProfile = ({ isOpen }) => {
    const dispatch = useDispatch();

	const user = useSelector(selectAuthUser);

    const onLogoutClick = () => dispatch(logoutOfApp());

	return (
		<div className={`${styles.profile} ${isOpen ? styles.profileOpened : ""}`}>
			{user.profilePic ? (
				<img className={styles.profileAvatar} src={user.profilePic} alt="" />
			) : (
				<span className={styles.profileAvatar}>{user.name[0].toUpperCase()}</span>
			)}
			<p className={styles.name}>{user.name}</p>
			<p className={styles.email}>{user.email}</p>
			<button className={styles.logout} onClick={onLogoutClick}>
				<span className="material-icons-round">logout</span>
				Logout
			</button>
		</div>
	);
};

export default UserProfile;
