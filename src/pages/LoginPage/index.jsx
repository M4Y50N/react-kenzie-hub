import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//Styled Components
import { Main } from "../../assets/styles/Main";
import { Title } from "../../assets/styles/Typography";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as yup from "yup";

import { api } from "../../api";
import { StyledInput } from "../../components/Input/styles";

export const LoginPage = () => {
	const { register, handleSubmit } = useForm();

	const loginSchema = yup.object().shape({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("É necessário fornecer um email válido"),
		password: yup.string().required("A senha é obrigatória"),
	});

	const submit = (data) => {
		console.log(data);
	};

	return (
		<Main>
			<Title Position={"center"} Padding={"form-title"}>
				Kenzie Hub
			</Title>
			<Form onSubmit={handleSubmit(submit)} noValidate>
				<h2>Login</h2>

				<Label htmlFor="email" children="Email" />
				<StyledInput
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					{...register("email")}
				/>

				<Label htmlFor="password" children="Senha" />
				<StyledInput
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					{...register("password")}
				/>

				<Button type="submit">Entrar</Button>

				<p>Ainda não possui conta?</p>

				<Link to="/register">Cadastre-se</Link>
			</Form>
		</Main>
	);
};
