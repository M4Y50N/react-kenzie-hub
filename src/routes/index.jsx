import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export class RoutesMain extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		);
	}
}
