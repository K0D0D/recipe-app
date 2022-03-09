import { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import styles from "./AuthPage.module.scss";
import { useSelector } from "react-redux";
import { selectAuthUser, selectAuthError } from "../../redux/auth/authSelectors";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../redux/auth/authThunks";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectAuthUser);
	const error = useSelector(selectAuthError);

	const [isSignedUp, setIsSignedUp] = useState(true);

	if (user) navigate(-1);

	const toggleIsSignedUp = () => setIsSignedUp(!isSignedUp);

	const openGooglePopup = () => dispatch(loginWithGoogle());

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{isSignedUp ? "Login" : "Sign Up"}</h2>
			<div className={styles.formContainer}>
				{isSignedUp ? (
					<Login rowClassName={styles.row} />
				) : (
					<SignUp rowClassName={styles.row} />
				)}
				{error && <p className={styles.error}>{error}</p>}
			</div>
			<p className={styles.or}>Or</p>
			<button className={styles.signinWith} onClick={openGooglePopup}>
				Sign in with Google
			</button>
			<p className={styles.text}>
				{isSignedUp ? "Need an account? " : "Already a user? "}
				<button onClick={toggleIsSignedUp}>
					{isSignedUp ? "Sign Up" : "Login"}
				</button>
			</p>
		</div>
	);
};

export default AuthPage;
