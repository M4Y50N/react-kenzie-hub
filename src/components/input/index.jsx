import { StyledInput } from "./styles";

export const Input = ({ type, id, name, value, placeholder, register }) => (
	<StyledInput
		type={type}
		id={id}
		name={name}
		value={value}
		placeholder={placeholder}
		{...register(name)}
	/>
);
