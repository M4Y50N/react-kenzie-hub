import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../api";

import { AuthContext } from "./AuthContext";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
	const { setDisable, loading, setLoading } = useContext(AuthContext);

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

	const registerUser = async (data) => {
		try {
			setDisable(true);
			await api.post("/users", data);

			setTimeout(navigate("/"), 1000);
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
		<RegisterContext.Provider
			value={{
				registerUser,
				register,
				handleSubmit,
				setValue,
				errors,
				loading,
				setLoading,
			}}
		>
			{children}
		</RegisterContext.Provider>
	);
};
