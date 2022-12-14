import { TechProvider } from "./contexts/TechContext";
import { UserProvider } from "./contexts/UserContext";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/global.js";

export const App = () => {
	return (
		<>
			<GlobalStyle />

			<UserProvider>
				<TechProvider>
					<RoutesMain />
				</TechProvider>
			</UserProvider>
		</>
	);
};
