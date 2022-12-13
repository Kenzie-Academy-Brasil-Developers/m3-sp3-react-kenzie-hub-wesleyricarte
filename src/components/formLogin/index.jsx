import Button from "../Button";
import { StyledForm } from "./style";
import { loginSchema } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const FormLogin = ({ login }) => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const emailLocalStorage = localStorage.getItem("@KenzieHub:userMail");

	return (
		<StyledForm onSubmit={handleSubmit(login)}>
			<h2>Login</h2>

			<section>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					placeholder="Digite aqui seu email"
					defaultValue={emailLocalStorage && emailLocalStorage}
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
