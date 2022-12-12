import { Button } from "../Button";
import { Label } from "../Label";
import { Input } from "../Input";
import { StyledModal } from "./styles";
import { useForm } from "react-hook-form";
import { Select } from "../Select";
import { api } from "../../api";
import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";

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
						CustomColor={"--color-primary-negative"}
						CustomColorHover={"--color-primary-focus"}
					>
						Salvar alterações
					</Button>
					<Button
						CustomColor={"--gray-20"}
						CustomColorHover={"--gray-50"}
						onClick={() => {
							setModalState(false);
						}}
					>
						Excluir
					</Button>
				</div>
			</form>
		</StyledModal>
	);
};
