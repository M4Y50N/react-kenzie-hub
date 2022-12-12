import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
//pages
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardProvider } from "../contexts/DashboardContext";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route element={<ProtectedRoutes />}>
				<Route
					path="/dashboard"
					element={
						<DashboardProvider>
							<Dashboard />
						</DashboardProvider>
					}
				/>
			</Route>
			<Route path="*" element={<h1>404 Rota não encontrada</h1>} />
		</Routes>
	);
};
