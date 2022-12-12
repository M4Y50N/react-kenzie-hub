import { StyledButton } from "./styles";

export const Button = ({
	type,
	name,
	onClick,
	disable,
	Padding,
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
				Padding={Padding}
				CustomColor={CustomColor}
				CustomColorHover={CustomColorHover}
				onClick={onClick}
			>
				{children}
			</StyledButton>
		</>
	);
};
