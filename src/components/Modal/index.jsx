import { useContext } from "react";
import { useForm } from "react-hook-form";
//Styled Components
import { StyledModal } from "./styles";
//Components
import { Button } from "../Button";
import { Select } from "../Select";
import { Input } from "../Input";
import { Label } from "../Label";

import { DashboardContext } from "../../contexts/DashboardContext";

import { api } from "../../api";

export const Modal = ({ setModalState }) => {
	const { register, handleSubmit, setValue } = useForm();

	const { setUserInfo } = useContext(DashboardContext);

	const options = [
		{ value: "Iniciante" },
		{ value: "Intermediário" },
		{ value: "Avançado" },
	];

	const submit = async (data) => {
		const userID = localStorage.getItem("@USERID");
		try {
			await api.post("/users/techs", data);

			const user = await api.get(`/users/${userID}`);
			setUserInfo(user?.data);
			setModalState(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledModal>
			<form onSubmit={handleSubmit(submit)} noValidate>
				<div className="topHeader">
					<h3>Tecnologia Detalhes</h3>
					<Button
						CustomColor={"--gray-50"}
						CustomColorHover={"--gray-100"}
						onClick={() => {
							setModalState(false);
						}}
					>
						X
					</Button>
				</div>
				<div className="body">
					<Label>Nome do projeto</Label>
					<Input
						type="text"
						id={"title"}
						name={"title"}
						placeholder="Material UI"
						register={register}
					/>
					<Label>Status</Label>
					<Select
						id={"status"}
						name={"status"}
						placeholder={"Selecione um nível"}
						setValue={setValue}
						attribute={"status"}
						options={options}
						register={register}
					/>
				</div>

				<div className="footer">
					<Button
						trype="submit"
						CustomColor={"--color-primary"}
						CustomColorHover={"--color-primary-focus"}
					>
						Cadastrar Tecnologia
					</Button>
				</div>
			</form>
		</StyledModal>
	);
};
