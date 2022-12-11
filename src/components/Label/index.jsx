import { StyledLabel } from "./styles";

export const Label = ({ htmlFor, children }) => {
	return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
