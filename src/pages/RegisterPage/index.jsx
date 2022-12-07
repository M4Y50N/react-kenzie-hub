import { useState } from "react";
//Styled Components
import { Main } from "../../assets/styles/Main";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormHead } from "./FormHead";

import { api } from "../../api";

export const RegisterPage = () => {
	const [form, setForm] = useState({});

	return (
		<Main>
			<FormHead />
			<Form
				onSubmit={(event) => {
					event.preventDefault();

					api
						.post("/users", {
							email: form.email,
							password: form.password,
							name: form.name,
							bio: form.bio,
							contact: form.contact,
							course_module: "2o Módulo (Frontend avançado)",
						})
						.then(function (res) {
							console.log(res);
						})
						.catch(function (err) {
							console.log(err);
						});
				}}
			>
				<h2>Crie sua conta</h2>
				<p>Rapido grátis, vamos nessa</p>

				<Label htmlFor="name">Nome</Label>
				<Input
					type="text"
					name="text"
					id="name"
					placeholder="Digite aqui seu nome"
					onChange={(event) => {
						setForm({ ...form, name: event.target.value });
					}}
				/>

				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					onChange={(event) => {
						setForm({ ...form, email: event.target.value });
					}}
				/>

				<Label htmlFor="password">Senha</Label>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					onChange={(event) => {
						setForm({ ...form, password: event.target.value });
					}}
				/>

				<Label htmlFor="confirm-password">Confirmar Senha</Label>
				<Input
					type="password"
					name="confirm-password"
					id="confirm-password"
					placeholder="Digite aqui a confirmação de sua senha"
				/>

				<Label htmlFor="bio">Bio</Label>
				<Input
					type="bio"
					name="bio"
					id="bio"
					placeholder="Fale sobre você"
					onChange={(event) => {
						setForm({ ...form, bio: event.target.value });
					}}
				/>

				<Label htmlFor="contact">Contato</Label>
				<Input
					type="contact"
					name="contact"
					id="contact"
					placeholder="Opção de contato"
					onChange={(event) => {
						setForm({ ...form, contact: event.target.value });
					}}
				/>

				<Button type="submit">Cadastrar</Button>
			</Form>
		</Main>
	);
};
