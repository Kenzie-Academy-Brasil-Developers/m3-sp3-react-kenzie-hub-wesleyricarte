import { StyledForm } from "./style";
import { loginSchema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../button";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const FormLogin = ({ authentication, setAuthentication, setUser }) => {
	const navigate = useNavigate();
	authentication && navigate("/dashboard");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const onSubmitFunction = (data) => {
		api.post("/sessions", data)
			.then((response) => {
				const { user, token } = response.data;

				localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
				localStorage.setItem(
					"@KenzieHub:userId",
					JSON.stringify(user.id)
				);
				localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

				toast.success("Login efetuado!", {
					style: {
						border: "solid 2px var(--color-success)",
					},
					iconTheme: {
						primary: "var(--color-success)",
						secondary: "#ffffff",
					},
				});

				setTimeout(() => {
					setAuthentication(true);
					setUser(user);
					navigate("/dashboard");
				}, 2800);

				console.log(response);
			})
			.catch((err) => {
				toast.error(`${err.response.data.message}`, {
					style: {
						border: "solid 2px var(--color-negative)",
					},
					iconTheme: {
						primary: "var(--color-negative)",
						secondary: "#ffffff",
					},
				});
			});
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
			<h2>Login</h2>

			<section>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					placeholder="Digite aqui seu email"
					{...register("email")}
				/>
				{errors.email?.message && <p>{errors.email.message}</p>}
			</section>

			<section>
				<label htmlFor="password">Senha</label>
				<input
					type="password"
					placeholder="Digite aqui sua senha"
					{...register("password")}
				/>
				{errors.password?.message && <p>{errors.password.message}</p>}
			</section>

			<Button type="submit">Entrar</Button>

			<div>
				<h5>Ainda não possui uma conta?</h5>
				<Button onClick={() => navigate("/register")}>
					Cadastre-se
				</Button>
			</div>

			<Toaster />
		</StyledForm>
	);
};

export default FormLogin;
