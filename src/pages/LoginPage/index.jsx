import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
//Styled Components
import { Main } from "../../assets/styles/Main";
import { Title } from "../../assets/styles/Typography";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {
	const { login, disable } = useContext(AuthContext),
		[loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const loginSchema = yup.object().shape({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup.string().required("A senha é obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	useEffect(() => {
		const token = localStorage.getItem("@TOKEN");

		if (token) {
			navigate("/dashboard", { replace: true });
		}

		setLoading(false);
	}, [navigate]);

	if (loading) {
		return null;
	}

	return (
		<Main>
			<Title
				Color={"--color-primary"}
				Position={"center"}
				Padding={"form-title"}
			>
				Kenzie Hub
			</Title>
			<Form onSubmit={handleSubmit(login)} noValidate>
				<h2>Login</h2>

				<Label htmlFor="email" children="Email" />
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					register={register}
				/>
				{errors.email?.message && <p>{errors.email.message}</p>}

				<Label htmlFor="password" children="Senha" />
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					register={register}
				/>

				<Button disable={disable} type="submit">
					Entrar
				</Button>

				<p>Ainda não possui conta?</p>

				<Link to="/register">Cadastre-se</Link>
			</Form>
		</Main>
	);
};
