import React from "react";
//Global css
import { Global } from "./assets/styles/global";
import { Reset } from "./assets/styles/reset";
//Routes
import { RoutesMain as Routes } from "./routes";

export class App extends React.Component {
	render() {
		return (
			<>
				<Global />
				<Reset />

				<Routes />
			</>
		);
	}
}
