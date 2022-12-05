import { FormContainer } from "../styles";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Label } from "../../Label";

import { useNavigate } from "react-router-dom";
import { FormHead } from "../../../pages/RegisterPage/FormHead";

export const FormRegister = () => {
	const navigate = useNavigate();
	return (
		<>
			<FormHead
				onClick={() => {
					navigate(-1);
				}}
			/>
			<FormContainer>
				<h2>Crie sua conta</h2>
				<p>Rapido grátis, vamos nessa</p>

				<Label htmlFor="name">Nome</Label>
				<Input
					type="text"
					name="text"
					id="name"
					placeholder="Digite aqui seu nome"
				/>

				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
				/>

				<Label htmlFor="password">Senha</Label>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
				/>

				<Label htmlFor="confirm-password">Confirmar Senha</Label>
				<Input
					type="password"
					name="confirm-password"
					id="confirm-password"
					placeholder="Digite aqui a confirmação de sua senha"
				/>

				<Label htmlFor="bio">Bio</Label>
				<Input type="bio" name="bio" id="bio" placeholder="Fale sobre você" />

				<Label htmlFor="contact">Contato</Label>
				<Input
					type="contact"
					name="contact"
					id="contact"
					placeholder="Opção de contato"
				/>

				<Button type="submit">Cadastrar</Button>
			</FormContainer>
		</>
	);
};
