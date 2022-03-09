import { useController } from "react-hook-form";
import styles from "./InputField.module.scss";

const InputField = ({ name, control, rules, ...rest }) => {
	const { field, fieldState } = useController({
		name,
		control,
		rules,
		defaultValue: ""
	});

	const { error } = fieldState;

	return (
		<div className={styles.field}>
			<input
				className={`${styles.input} ${error ? styles.invalid : ""}`}
				{...field}
				{...rest}
			/>
			{error && (
				<p>
					{error?.message}
					{error?.type === "required" && "This field is required"}
				</p>
			)}
		</div>
	);
};

export default InputField;
