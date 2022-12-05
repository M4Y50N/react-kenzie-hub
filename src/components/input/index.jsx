import { StyledInput } from "./styles";

export const Input = ({ type, id, name, placeholder, onChange }) => {
	return (
		<StyledInput
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};
