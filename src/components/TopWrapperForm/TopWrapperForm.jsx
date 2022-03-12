import styles from "./TopWrapperForm.module.scss";

const TopWrapperForm = ({
	onChange,
	inputValue,
	placeholder,
	buttonIcon,
	onSubmit,
	onClearButtonClick,
	disabled,
	...rest
}) => (
	<form className={styles.form} onSubmit={onSubmit} {...rest}>
		<input
			className={styles.input}
			placeholder={placeholder}
			onChange={onChange}
			value={inputValue}
			type="text"
		/>
		{!!inputValue.length && (
			<button
				className={styles.clearButton}
				onClick={onClearButtonClick}
				type="button"
			>
				<span className="material-icons-round">close</span>
			</button>
		)}
		<button className={styles.button} disabled={disabled} type="submit">
			{buttonIcon}
		</button>
	</form>
);

export default TopWrapperForm;
