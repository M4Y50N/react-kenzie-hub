//Styled Components
import { Title } from "../../../assets/styles/Typography";
import { StyledFormHead } from "./styles";
//Components
import { Button } from "../../../components/Button";

export const FormHead = ({ onClick }) => {
	return (
		<StyledFormHead>
			<Title>Kenzie Hub</Title>
			<Button onClick={onClick}>Voltar</Button>
		</StyledFormHead>
	);
};
