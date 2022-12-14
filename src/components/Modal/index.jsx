import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
//Styled Components
import { StyledModal } from "./styles";
//Components
import { Button } from "../Button";
import { Select } from "../Select";
import { Input } from "../Input";
import { Label } from "../Label";

import { DashboardContext } from "../../contexts/DashboardContext";

export const Modal = ({ setModalState }) => {
	const { register, handleSubmit, setValue } = useForm();

	const { addTech, editTech, modalValues, addOrEdit } =
		useContext(DashboardContext);

	const options = [
		{ value: "Iniciante" },
		{ value: "Intermediário" },
		{ value: "Avançado" },
	];

	return (
		<StyledModal addOrEdit={addOrEdit}>
			<div>
				<form
					onSubmit={handleSubmit(addOrEdit ? addTech : editTech)}
					noValidate
				>
					<div className="topHeader">
						<h3>
							{addOrEdit ? "Adicionar Tecnologia" : "Tecnologia Detalhes"}
						</h3>
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
							value={modalValues?.title}
							placeholder="Material UI"
							register={register}
						/>
						<Label>Status</Label>
						<Select
							id={"status"}
							name={"status"}
							placeholder={"Selecione um nível"}
							setValue={setValue}
							value={modalValues?.status}
							attribute={"status"}
							options={options}
							register={register}
						/>
					</div>

					<div className="footer">
						{addOrEdit ? (
							<Button
								trype="submit"
								CustomColor={"--color-primary"}
								CustomColorHover={"--color-primary-focus"}
							>
								Cadastrar Tecnologia
							</Button>
						) : (
							<>
								<Button
									trype="submit"
									CustomColor={"--color-primary-negative"}
									CustomColorHover={"--color-primary"}
								>
									Salvar alterações
								</Button>
								<Button
									trype="submit"
									CustomColor={"--gray-50"}
									CustomColorHover={"--gray-20"}
									onClick={() => {
										setModalState(false);
									}}
								>
									Excluir
								</Button>
							</>
						)}
					</div>
				</form>
			</div>
		</StyledModal>
	);
};
