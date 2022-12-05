//Global css
import { Global } from "./assets/styles/global";
import { Reset } from "./assets/styles/reset";
//Routes
import { RoutesMain as Routes } from "./routes";

export const App = () => {
	return (
		<>
			<Global />
			<Reset />

			<Routes />
		</>
	);
};
