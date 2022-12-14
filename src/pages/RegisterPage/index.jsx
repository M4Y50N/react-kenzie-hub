import { useContext, useEffect } from "react";
//Styled Components
import { Main } from "../../assets/styles/Main";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Head } from "../../components/Head";

import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../contexts/RegisterContext";
import { P } from "../../assets/styles/Typography";

export const RegisterPage = () => {
	const {
		registerUser,
		disable,
		loading,
		setLoading,
		register,
		handleSubmit,
		errors,
		setValue,
	} = useContext(RegisterContext);

	const navigate = useNavigate();

	//All select options
	const options = [
		{ value: "Primeiro módulo(Introdução ao HTML, JS e CSS)" },
		{ value: "Segundo módulo(Frontend Avançado)" },
		{ value: "Terceiro módulo(Introdução ao Backend)" },
		{ value: "Quarto módulo(Backend Avançado)" },
	];

	useEffect(() => {
		const token = localStorage.getItem("@TOKEN");

		if (token) {
			navigate("/dashboard");
		}
		setLoading(false);
	}, [navigate, setLoading]);

	if (loading) {
		return null;
	}

	return (
		<Main>
			<Head
				title={"Kenzie Hub"}
				buttonContent={"Voltar"}
				titleColor={"--color-primary"}
				MaxWidth={"37rem"}
				onClick={() => {
					navigate("/");
				}}
			/>
			<Form onSubmit={handleSubmit(registerUser)} noValidate>
				<h2>Crie sua conta</h2>
				<h4>Rapido grátis, vamos nessa</h4>

				<Label htmlFor="name">Nome</Label>
				<Input
					type="text"
					name="name"
					id="name"
					placeholder="Digite aqui seu nome"
					register={register}
				/>

				{errors.name?.message && <P>{errors.name.message}</P>}

				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					register={register}
				/>

				{errors.email?.message && <P>{errors.email.message}</P>}

				<Label htmlFor="password">Senha</Label>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					register={register}
				/>

				{errors.password?.message && <P>{errors.password.message}</P>}

				<Label htmlFor="confirm_password">Confirmar Senha</Label>
				<Input
					type="password"
					name="confirm_password"
					id="confirm_password"
					placeholder="Digite aqui a confirmação de sua senha"
					register={register}
				/>

				{errors.confirm_password?.message && (
					<P>{errors.confirm_password.message}</P>
				)}

				<Label htmlFor="bio">Bio</Label>
				<Input
					type="text"
					name="bio"
					id="bio"
					placeholder="Fale sobre você"
					register={register}
				/>

				{errors.bio?.message && <P>{errors.bio.message}</P>}

				<Label htmlFor="contact">Contato</Label>
				<Input
					type="text"
					name="contact"
					id="contact"
					placeholder="Opção de contato"
					register={register}
				/>
				{errors.contact?.message && <P>{errors.contact.message}</P>}

				<Label htmlFor="course_module">Selecionar Módulo</Label>
				<Select
					name="course_module"
					id="course_module"
					placeholder="Escolha uma opção"
					setValue={setValue}
					attribute={"course_module"}
					options={options}
					register={register}
				/>

				{errors.course_module?.message && <P>{errors.course_module.message}</P>}

				<Button type="submit" disable={disable}>
					Cadastrar
				</Button>
			</Form>
		</Main>
	);
};
