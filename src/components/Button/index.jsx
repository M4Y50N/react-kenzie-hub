import { StyledButton } from "./styles";

export const Button = ({ type, name, onClick, disable, children }) => {
	return (
		<>
			<StyledButton type={type} name={name} disable={disable} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
