import { StyledInput } from "./styles";

export const Input = ({ type, id, name, placeholder, register }) => (
	<StyledInput
		type={type}
		id={id}
		name={name}
		placeholder={placeholder}
		{...register(name)}
	/>
);
