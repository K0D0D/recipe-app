import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup
} from "firebase/auth";

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STORAGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	REACT_APP_FIREBASE_APP_ID,
	REACT_APP_FIREBASE_MEASUREMENT_ID
} = process.env;

const firebaseApp = initializeApp({
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_APP_FIREBASE_APP_ID,
	measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
});

const db = getFirestore(firebaseApp);

const auth = getAuth();

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				unsubscribe();

				resolve(user);
			},
			reject
		);
	});
};

const firebaseLogin = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

const firebaseRegister = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

const firebaseLogout = () => signOut(auth);

const signInWithGoogle = () => {
	const provider = new GoogleAuthProvider();

	return signInWithPopup(auth, provider);
};

export {
	db,
	getCurrentUser,
	firebaseLogin,
	firebaseRegister,
	firebaseLogout,
	signInWithGoogle
};
