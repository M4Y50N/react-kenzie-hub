import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [disable, setDisable] = useState(false),
		[user, setUser] = useState(null),
		[loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const loadUser = async () => {
			const token = localStorage.getItem("@TOKEN");

			if (!token) {
				setLoading(false);
				return;
			}

			try {
				api.defaults.headers.common.authorization = `Bearer ${token}`;

				const { data } = await api.get("/profile");

				setUser(data);
			} catch (error) {
				console.log(error);
				localStorage.clear();
			} finally {
				setLoading(false);
			}
		};

		loadUser();
	}, []);

	//login
	const login = async (data) => {
		try {
			setDisable(true);
			const response = await api.post("/sessions", data);

			const { token, user: userResponse } = response.data;

			setUser(userResponse);
			window.localStorage.setItem("@TOKEN", token);
			window.localStorage.setItem("@USERID", userResponse.id);

			api.defaults.headers.common.authorization = `Bearer ${token}`;

			navigate("/dashboard", { replace: true });
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setDisable(false);
			}, 1000);
		}
	};

	return (
		<AuthContext.Provider value={{ login, disable, user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
