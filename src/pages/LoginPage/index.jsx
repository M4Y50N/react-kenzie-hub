import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
//Styled Components
import { Main } from "../../assets/styles/Main";
import { P, Title } from "../../assets/styles/Typography";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {
	const { login, disable, loading, setLoading } = useContext(AuthContext);

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
	}, [navigate, setLoading]);

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
				{errors.email?.message && <P>{errors.email.message}</P>}

				<Label htmlFor="password" children="Senha" />
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					register={register}
				/>

				{errors.password?.message && <P>{errors.password.message}</P>}

				<Button disable={disable} type="submit">
					Entrar
				</Button>

				<P>Ainda não possui conta?</P>

				<Link to="/register">Cadastre-se</Link>
			</Form>
		</Main>
	);
};
