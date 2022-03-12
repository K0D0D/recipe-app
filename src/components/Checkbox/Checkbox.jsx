import styles from "./Checkbox.module.scss";

const Checkbox = ({
	checked,
	onChange,
	className,
	checkedClassName = "",
	disabledClassName = "",
	disabled,
	children,
	...rest
}) => (
	<label
		className={
			`${styles.label} ${className || ""}` +
			` ${checked ? styles.checked + " " + checkedClassName : ""}` +
			` ${disabled ? styles.disabled + " " + disabledClassName : ""}`
		}
	>
		{children}
		<input
			checked={checked}
			onChange={onChange}
			value={children}
			type="checkbox"
			disabled={disabled}
			{...rest}
		/>
	</label>
);

export default Checkbox;
