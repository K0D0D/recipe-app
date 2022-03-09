import styles from "./Button.module.scss";

const Button = ({ variant = "contained", className = "", children, ...rest }) => (
	<button 
		className={`${styles.button} ${styles[variant]} ${className}`} 
		{...rest}
	>
		{children || "Button"}
	</button>
);

export default Button;
