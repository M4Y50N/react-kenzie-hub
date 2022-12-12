import { useContext } from "react";
//Components
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Technologies } from "./components/Technologies";
import { UserInfo } from "./components/UserInfo";

import { DashboardContext } from "../../contexts/DashboardContext";

export const Dashboard = () => {
	const { loading, modalState, setModalState } = useContext(DashboardContext);

	if (loading) {
		return null;
	}

	return (
		<>
			{modalState && <Modal setModalState={setModalState} />}

			<Header />

			<UserInfo />
			<Technologies setModalState={setModalState} />
		</>
	);
};
