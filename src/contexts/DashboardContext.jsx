import { createContext, useEffect, useState } from "react";
import { api } from "../api";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(),
		[loading, setLoading] = useState(true);

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
	}, []);

	return (
		<DashboardContext.Provider value={{ userInfo, loading }}>
			{children}
		</DashboardContext.Provider>
	);
};
