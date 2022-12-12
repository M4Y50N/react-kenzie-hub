import { useContext } from "react";
//Styled Components
import { StyledTechnologies, StyledUl } from "./styles";
import { Container } from "../../../../assets/styles/Container";
//Components
import { Head } from "../../../../components/Head";
import { Button } from "../../../../components/Button";

import { DashboardContext } from "../../../../contexts/DashboardContext";

import { api } from "../../../../api";

import trash from "../../../../assets/img/trash-can.png";

export const Technologies = ({ setModalState }) => {
	const { userInfo: user, setUserInfo } = useContext(DashboardContext);

	const deleteTech = async (id) => {
		await api.delete(`/users/techs/${id}`);
		const userID = localStorage.getItem("@USERID");

		const user = await api.get(`/users/${userID}`);
		setUserInfo(user?.data);
	};

	return (
		<Container>
			<StyledTechnologies>
				<Head
					title={"Tecnologias"}
					buttonContent={"Add"}
					onClick={() => {
						setModalState(true);
					}}
				/>

				<StyledUl>
					{user.techs.map((tech, i) => {
						return (
							<li key={i}>
								<h3>{tech.title}</h3>
								<div>
									{tech.status}{" "}
									<Button
										Padding={".7rem 1rem"}
										CustomColor={"--gray-50"}
										CustomColorHover={"--gray-100"}
										onClick={() => {
											deleteTech(tech.id);
										}}
									>
										<img src={trash} alt="trash" />
									</Button>
								</div>
							</li>
						);
					})}
				</StyledUl>
			</StyledTechnologies>
		</Container>
	);
};
