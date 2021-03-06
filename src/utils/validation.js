export const emailFieldRules = {
	required: true,
	minLength: {
		value: 6,
		message: "Your email must be between 6 and 64 characters long"
	},
	maxLength: {
		value: 64,
		message: "Your email must be between 6 and 64 characters long"
	},
	pattern: {
		value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		message: "Please enter a valid e-mail address"
	}
};

export const passwordFieldRules = {
	required: true,
	minLength: {
		value: 6,
		message: "Use 6 characters or more for your password"
	}
};

export const urlFieldRules = {
    pattern: {
        value: /^(ftp|http|https):\/\/[^ "]+$/,
        message: "Please enter a valid URL"
    }
};