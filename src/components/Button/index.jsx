import { StyledButton } from "./styles";

export const Button = ({
	type,
	name,
	onClick,
	disable,
	CustomColor,
	CustomColorHover,
	children,
}) => {
	return (
		<>
			<StyledButton
				type={type}
				name={name}
				disable={disable}
				CustomColor={CustomColor}
				CustomColorHover={CustomColorHover}
				onClick={onClick}
			>
				{children}
			</StyledButton>
		</>
	);
};
