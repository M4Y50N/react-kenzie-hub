//Styled Components
import { Main } from "../../assets/styles/Main";
//Components
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";

export const Form = ({ type, form, setForm }) => {
	return (
		<Main>
			{type === "login" ? (
				<FormLogin form={form} setForm={setForm} />
			) : (
				<FormRegister />
			)}
		</Main>
	);
};
