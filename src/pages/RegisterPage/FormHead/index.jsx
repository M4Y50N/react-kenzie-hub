import { useNavigate } from "react-router-dom";
//Styled Components
import { Title } from "../../../assets/styles/Typography";
import { StyledFormHead } from "./styles";
//Components
import { Button } from "../../../components/Button";

export const FormHead = () => {
	const navigate = useNavigate();

	return (
		<StyledFormHead>
			<Title>Kenzie Hub</Title>
			<Button
				onClick={() => {
					navigate(-1);
				}}
			>
				Voltar
			</Button>
		</StyledFormHead>
	);
};
