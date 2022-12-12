import { Container } from "../../../../assets/styles/Container";
import { StyledTechnologies, StyledUl } from "./styles";
import { Head } from "../../../../components/Head";
import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext";

export const Technologies = () => {
	const { userInfo: user } = useContext(DashboardContext);

	return (
		<Container>
			<StyledTechnologies>
				<Head
					title={"Tecnologias"}
					buttonContent={"Add"}
					onClick={() => {
						console.log("Adicionar Tecnologia");
					}}
				/>

				<StyledUl>
					{user.techs.map((tech, i) => {
						return (
							<li key={i}>
								<h3>{tech.title}</h3>
								<h3>{tech.status}</h3>
							</li>
						);
					})}
				</StyledUl>
			</StyledTechnologies>
		</Container>
	);
};
