import { StyledButton } from "./styles";

export const Button = ({ type, name, children }) => {
	return (
		<>
			<StyledButton type={type} name={name}>
				{children}
			</StyledButton>
		</>
	);
};
