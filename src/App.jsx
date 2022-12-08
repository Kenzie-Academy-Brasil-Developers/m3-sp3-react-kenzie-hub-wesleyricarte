import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import NotFoundPage from "./pages/notFound";

const App = () => {
	const [user, setUser] = useState({});
	const [authentication, setAuthentication] = useState(false);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
		token && setAuthentication(true);
	}, [authentication]);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<LoginPage
							authentication={authentication}
							setAuthentication={setAuthentication}
							setUser={setUser}
						/>
					}
				/>
				<Route
					path="/register"
					element={<RegisterPage authentication={authentication} />}
				/>
				<Route
					path="/dashboard"
					element={
						<DashboardPage
							authentication={authentication}
							setAuthentication={setAuthentication}
							user={user}
							setUser={setUser}
						/>
					}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
