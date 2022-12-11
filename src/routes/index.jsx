import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
//pages
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
			<Route path="*" element={<h1>404 Rota não encontrada</h1>} />
		</Routes>
	);
};
