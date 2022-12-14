import { createContext } from "react";
import api from "../services/api.js";
import { toast, Toaster } from "react-hot-toast";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
	async function postTech(newTech) {
		try {
			const request = await api.post("/users/techs", newTech);

			const response = await request.data;

			toast.success(
				`Técnologia ${response.title} com status ${response.status} adicionada!`,
				{
					style: {
						border: "solid 2px var(--color-success)",
					},
					iconTheme: {
						primary: "var(--color-success)",
						secondary: "#ffffff",
					},
					duration: 5000,
				}
			);
		} catch (error) {
			console.error(error);
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

	async function putTech(newTech, techId) {
		try {
			const request = await api.put("/users/techs/" + techId, newTech);

			const response = await request.data;

			toast.success(
				`Técnologia ${response.title} atualizada com status ${response.status}!`,
				{
					style: {
						border: "solid 2px var(--color-success)",
					},
					iconTheme: {
						primary: "var(--color-success)",
						secondary: "#ffffff",
					},
					duration: 5000,
				}
			);
		} catch (error) {
			console.error(error);
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

	async function deleteTech(techId) {
		try {
			await api.delete("/users/techs/" + techId);

			toast.success(`Técnologia excluída!`, {
				style: {
					border: "solid 2px var(--color-success)",
				},
				iconTheme: {
					primary: "var(--color-success)",
					secondary: "#ffffff",
				},
				duration: 3000,
			});
		} catch (error) {
			console.error(error);
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
		<TechContext.Provider value={{ postTech, putTech, deleteTech }}>
			{children}
			<Toaster />
		</TechContext.Provider>
	);
};
