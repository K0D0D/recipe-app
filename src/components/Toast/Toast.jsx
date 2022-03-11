import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Toast.module.scss";

const Toast = () => (
	<ToastContainer
		position="bottom-right"
		autoClose={2000}
		draggablePercent={50}
		hideProgressBar
		pauseOnHover={false}
		pauseOnFocusLoss={false}
		closeOnClick={false}
		className={styles.container}
		toastClassName={styles.toast}
		bodyClassName={styles.body}
	/>
);

export default Toast;
