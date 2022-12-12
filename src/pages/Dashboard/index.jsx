import { useContext } from "react";
import { Header } from "../../components/Header";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Technologies } from "./components/Technologies";
import { UserInfo } from "./components/UserInfo";

export const Dashboard = () => {
	const { loading } = useContext(DashboardContext);

	if (loading) {
		return null;
	}

	return (
		<>
			<Header />

			<UserInfo />
			<Technologies />
		</>
	);
};
