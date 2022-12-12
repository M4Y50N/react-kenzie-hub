import { StyledHeader } from "./styles";
import { Container } from "../../assets/styles/Container";
import { Title } from "../../assets/styles/Typography";

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	return (
		<Container BoxShadow={true}>
			<StyledHeader>
				<Title Color={"--color-primary"}>Kenzie Hub</Title>
				<Button
					CustomColor={"--gray-50"}
					CustomColorHover={"--gray-20"}
					onClick={() => {
						localStorage.clear();
						navigate("/");
					}}
				>
					Sair
				</Button>
			</StyledHeader>
		</Container>
	);
};
