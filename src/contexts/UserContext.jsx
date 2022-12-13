import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		async function loadUser() {
			const token = localStorage.getItem("@KenzieHub:token");

			if (!token) {
				setLoading(false);
				return;
			}

			try {
				api.defaults.headers.common.authorization = `Bearer ${token}`;

				const { data } = await api.get("/profile");

				setUser(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		loadUser();
	}, []);

	async function login(data) {
		try {
			const response = await api.post("/sessions", data);

			const { token, user: userResponse } = response.data;

			setUser(userResponse);

			localStorage.setItem("@KenzieHub:token", token);
			localStorage.setItem("@KenzieHub:userId", userResponse.id);
			localStorage.setItem("@KenzieHub:userMail", userResponse.email);

			api.defaults.headers.common.authorization = `Bearer ${token}`;

			toast.success("Login efetuado!", {
				style: {
					border: "solid 2px var(--color-success)",
				},
				iconTheme: {
					primary: "var(--color-success)",
					secondary: "#ffffff",
				},
				duration: 3000,
			});

			setTimeout(() => {
				const toNavigate =
					location.state?.from?.pathname || "/dashboard";
				navigate(toNavigate, { replace: true });
			}, 2800);
		} catch (error) {
			console.error(error);

			localStorage.removeItem("@KenzieHub:token");
			localStorage.removeItem("@KenzieHub:userId");

			toast.error(`${error.response.data.message}`, {
				style: {
					border: "solid 2px var(--color-negative)",
				},
				iconTheme: {
					primary: "var(--color-negative)",
					secondary: "#ffffff",
				},
				duration: 5000,
			});
		}
	}

	return (
		<UserContext.Provider value={{ login, user, setUser, loading }}>
			{children}
		</UserContext.Provider>
	);
};
