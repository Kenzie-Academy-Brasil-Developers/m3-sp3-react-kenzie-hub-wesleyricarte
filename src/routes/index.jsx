import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage"

const RoutesMain = () => (
	<Routes>
		<Route path="/" element={<LoginPage />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="*" element={<NotFoundPage />} />

		<Route element={<ProtectedRoutes />}>
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/profile" element={<ProfilePage />} />
		</Route>
	</Routes>
);

export default RoutesMain
