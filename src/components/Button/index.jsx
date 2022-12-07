import { StyledButton } from "./styles";

export const Button = ({ type, name, onClick, children }) => {
	return (
		<>
			<StyledButton type={type} name={name} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
