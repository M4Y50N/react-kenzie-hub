//Styled Components
import { Title } from "../../assets/styles/Typography";
import { StyledHead } from "./styles";
//Components
import { Button } from "../Button";

export const Head = ({ title, onClick, buttonContent, titleColor }) => {
	return (
		<StyledHead>
			<Title Color={titleColor}>{title}</Title>
			<Button
				CustomColor={"--gray-50"}
				CustomColorHover={"--gray-20"}
				onClick={() => {
					onClick();
				}}
			>
				{buttonContent}
			</Button>
		</StyledHead>
	);
};
