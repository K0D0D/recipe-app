import Select, { components } from "react-select";

const DropdownIndicator = (props) => (
	<components.DropdownIndicator {...props}>
		<span className="material-icons-round" style={{ fontSize: "1.3em" }}>
			keyboard_arrow_down
		</span>
	</components.DropdownIndicator>
);

const ClearIndicator = (props) => (
	<components.ClearIndicator {...props}>
		<span className="material-icons-round" style={{ fontSize: "1em" }}>
			clear
		</span>
	</components.ClearIndicator>
);

const customStyles = {
	control: (provided, state) => ({
		...provided,
		borderRadius: "1em",
		boxShadow: state.isFocused ? "0 0 0 2px #88AB66" : "none",
		transition: "none",
		border: "none",
		minHeight: "0",
		padding: "0.5em 0.4em 0.5em 1em"
	}),
	valueContainer: (provided) => ({
		...provided,
		textAlign: "left",
		padding: 0
	}),
	singleValue: (provided) => ({
		...provided,
		color: "#453F3F",
		margin: 0
	}),
	input: (provided) => ({
		...provided,
		margin: 0,
		padding: 0,
		color: "#453F3F",
		overflow: "hidden"
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#cccccc",
		margin: 0
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		padding: 0,
		color: "rgba(69, 63, 63, 0.4)",
		userSelect: "none"
	}),
	clearIndicator: (provided) => ({
		...provided,
		padding: "0 0.2em",
		color: "rgba(69, 63, 63, 0.4)",
		userSelect: "none"
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		margin: "0.2em 0",
		background: "rgba(69, 63, 63, 0.4)"
	}),
	menu: (provided) => ({
		...provided,
		textAlign: "left",
		borderRadius: "1em",
		overflow: "hidden",
		padding: "0.3em 0",
		margin: "0.2em 0 0 0"
	}),
	menuList: (provided) => ({
		...provided,
		maxHeight: "11em",
		scrollbarWidth: "thin",
		scrollbarColor: "#ccc transparent",
		"::-webkit-scrollbar": {
			width: "7px"
		},
		"::-webkit-scrollbar-thumb": {
			background: "#ccc",
			borderRadius: "1em"
		}
	}),
	option: (provided, state) => ({
		...provided,
		padding: "0.4em 1em",
		transition: "background 0.2s",
		background:
			(state.isSelected && "#88AB66") ||
			(state.isFocused && "rgba(136, 171, 102, 0.4)"),
		"&:hover": {
			background: !state.isSelected && "rgba(136, 171, 102, 0.5)"
		},
		"&:active": {
			background: !state.isSelected && "rgba(136, 171, 102, 0.6)"
		}
	})
};

const Dropdown = ({ options, placeholder, styles, ...rest }) => (
	<Select
		options={options}
		placeholder={placeholder}
		styles={{ ...customStyles, ...styles }}
		components={{ DropdownIndicator, ClearIndicator }}
		isClearable
		{...rest}
	/>
);

export default Dropdown;
