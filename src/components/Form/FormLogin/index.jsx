//Styled Component
import { FormContainer } from "../styles";
import { Title } from "../../../assets/styles/Typography";
//Component
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Label } from "../../Label";

import { api } from "../../../api/api";

import { Link } from "react-router-dom";

export const FormLogin = ({ form, setForm }) => {
	return (
		<>
			<Title Position={"center"} Padding={"form-title"}>
				Kenzie Hub
			</Title>
			<FormContainer
				onSubmit={(event) => {
					event.preventDefault();
					api
						.post("/sessions", { email: form.email, password: form.password })
						.then(function (res) {
							console.log(res);
						})
						.catch(function (err) {
							console.log(err);
						});
				}}
			>
				<h2>Login</h2>

				<Label htmlFor="email" children="Email" />
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					onChange={(event) => {
						setForm({ ...form, email: event.target.value });
					}}
				/>

				<Label htmlFor="password" children="Senha" />
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					onChange={(event) => {
						setForm({ ...form, password: event.target.value });
					}}
				/>

				<Button type="submit">Entrar</Button>

				<p>Ainda não possui conta?</p>

				<Link to="/register">Cadastre-se</Link>
			</FormContainer>
		</>
	);
};
