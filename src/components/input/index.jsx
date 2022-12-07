import { StyledInput } from "./styles";

export const Input = ({ type, id, name, placeholder }) => {
	return (
		<StyledInput type={type} id={id} name={name} placeholder={placeholder} />
	);
};
