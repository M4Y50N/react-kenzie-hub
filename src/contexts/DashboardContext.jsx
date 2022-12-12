import { createContext, useEffect, useState } from "react";
import { api } from "../api";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(),
		[loading, setLoading] = useState(true),
		[modalState, setModalState] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			const userID = localStorage.getItem("@USERID");

			if (!userID) {
				setLoading(false);
			}

			try {
				const user = await api.get(`/users/${userID}`);
				setUserInfo(user?.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getUser();
	}, [setUserInfo]);

	const addTech = async (data) => {
		const userID = localStorage.getItem("@USERID");
		try {
			await api.post("/users/techs", data);

			const user = await api.get(`/users/${userID}`);

			setUserInfo(user?.data);
			setModalState(false);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTech = async (id) => {
		await api.delete(`/users/techs/${id}`);
		const userID = localStorage.getItem("@USERID");

		const user = await api.get(`/users/${userID}`);
		setUserInfo(user?.data);
	};

	return (
		<DashboardContext.Provider
			value={{
				userInfo,
				setUserInfo,
				modalState,
				setModalState,
				addTech,
				deleteTech,
				loading,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};
