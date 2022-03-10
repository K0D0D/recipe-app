import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import {
	emailFieldRules,
	passwordFieldRules,
	urlFieldRules
} from "../../utils/validation";
import { useDispatch } from "react-redux";
import { registerInApp } from "../../redux/auth/authThunks";
import { useSelector } from "react-redux";
import { selectAuthIsLoading } from "../../redux/auth/authSelectors";
import Button from "../Button/Button";

const SignUp = ({ rowClassName }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthIsLoading);

	const { control, handleSubmit, getValues } = useForm({
		mode: "onTouched"
	});

	const onSubmit = ({ email, password, name, profilePic }) =>
		dispatch(registerInApp({ email, password, name, profilePic }));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={rowClassName}>
				<InputField
					name="name"
					control={control}
					rules={{
						required: true
					}}
					placeholder="Your name"
					autoComplete="off"
					type="text"
					disabled={isLoading}
				/>
			</div>
			<div className={rowClassName}>
				<InputField
					name="profilePic"
					control={control}
					rules={{
						...urlFieldRules
					}}
					placeholder="Photo URL (optional)"
					autoComplete="off"
					type="text"
					disabled={isLoading}
				/>
			</div>
			<div className={rowClassName}>
				<InputField
					name="email"
					control={control}
					rules={{
						...emailFieldRules
					}}
					placeholder="E-mail"
					autoComplete="off"
					type="text"
					disabled={isLoading}
				/>
			</div>
			<div className={rowClassName}>
				<InputField
					name="password"
					control={control}
					rules={{
						...passwordFieldRules
					}}
					placeholder="Password"
					type="password"
					disabled={isLoading}
				/>
			</div>
			<div className={rowClassName}>
				<InputField
					name="check_password"
					control={control}
					rules={{
						...passwordFieldRules,
						validate: {
							checkPassword: (value) => {
								const { password } = getValues();

								return (
									(value && password === value) ||
									"Passwords should match!"
								);
							}
						}
					}}
					placeholder="Repeat your password"
					type="password"
					disabled={isLoading}
				/>
			</div>
			<Button
				style={{ marginTop: "1.875em", width: "100%" }}
				disabled={isLoading}
			>
				Sign Up
			</Button>
		</form>
	);
};

export default SignUp;
