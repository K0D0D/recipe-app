import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { loginToApp } from "../../redux/auth/authThunks";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsLoading } from "../../redux/auth/authSelectors";
import Button from "../Button/Button";
import { emailFieldRules } from "../../utils/validation";

const Login = ({ rowClassName }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthIsLoading);

	const { control, handleSubmit } = useForm({
		mode: "onTouched"
	});

	const onSubmit = ({ email, password }) => dispatch(loginToApp({ email, password }));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
						required: true
					}}
					placeholder="Password"
					type="password"
					disabled={isLoading}
				/>
			</div>
			<Button
				style={{ marginTop: "1.875em", width: "100%" }}
				disabled={isLoading}
			>
				Login
			</Button>
		</form>
	);
};

export default Login;
