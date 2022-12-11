import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//Styled Components
import { Main } from "../../assets/styles/Main";
//Components
import { FormContainer as Form } from "../../components/Form/styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { FormHead } from "./FormHead";

import { api } from "../../api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
	const [disable, setDisable] = useState(false),
		[loading, setLoading] = useState(true);
	const navigate = useNavigate();

	//Form
	const registerSchema = yup.object().shape({
		name: yup
			.string()
			.required("O nome é obrigatório")
			.min(3, "O nome precisa ter no minimo 3 caracteres")
			.max(255, "O nome pode ter no máximo 255 caracteres"),
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup.string().required("A senha é obrigatória"),
		confirm_password: yup.string().required("A senha é obrigatória"),
		bio: yup.string().max(500, "A bio pode ter no máximo 500 caracteres"),
		contact: yup.string().required("O contato é obrigatório"),
		course_module: yup.string().required("Escolha uma opção válida"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(registerSchema),
	});

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
	}, [navigate]);

	if (loading) {
		return null;
	}

	//Create user
	const submit = async (data) => {
		try {
			setDisable(true);
			const response = await api.post("/users", data);

			setTimeout(navigate("/login"), 1000);
		} catch (error) {
			console.log(error);
			reset({
				password: "",
				confirm_password: "",
			});
		} finally {
			setTimeout(setDisable(false), 1000);
		}
	};

	return (
		<Main>
			<FormHead />
			<Form onSubmit={handleSubmit(submit)} noValidate>
				<h2>Crie sua conta</h2>
				<p>Rapido grátis, vamos nessa</p>

				<Label htmlFor="name">Nome</Label>
				<Input
					type="text"
					name="name"
					id="name"
					placeholder="Digite aqui seu nome"
					register={register}
				/>

				{errors.name?.message && <p>{errors.name.message}</p>}

				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Digite aqui seu email"
					register={register}
				/>

				{errors.email?.message && <p>{errors.email.message}</p>}

				<Label htmlFor="password">Senha</Label>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Digite aqui sua senha"
					register={register}
				/>

				{errors.password?.message && <p>{errors.password.message}</p>}

				<Label htmlFor="confirm_password">Confirmar Senha</Label>
				<Input
					type="password"
					name="confirm_password"
					id="confirm_password"
					placeholder="Digite aqui a confirmação de sua senha"
					register={register}
				/>

				{errors.confirm_password?.message && (
					<p>{errors.confirm_password.message}</p>
				)}

				<Label htmlFor="bio">Bio</Label>
				<Input
					type="text"
					name="bio"
					id="bio"
					placeholder="Fale sobre você"
					register={register}
				/>

				{errors.bio?.message && <p>{errors.bio.message}</p>}

				<Label htmlFor="contact">Contato</Label>
				<Input
					type="text"
					name="contact"
					id="contact"
					placeholder="Opção de contato"
					register={register}
				/>
				{errors.contact?.message && <p>{errors.contact.message}</p>}

				<Label htmlFor="course_module">Selecionar Módulo</Label>
				<Select
					type="text"
					name="course_module"
					id="course_module"
					placeholder="Escolha uma opção"
					setValue={setValue}
					options={options}
					register={register}
				/>

				{errors.course_module?.message && <p>{errors.course_module.message}</p>}

				<Button type="submit" disable={disable}>
					Cadastrar
				</Button>
			</Form>
		</Main>
	);
};
