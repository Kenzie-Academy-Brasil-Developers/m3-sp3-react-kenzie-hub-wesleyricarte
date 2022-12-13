import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { StyledMain } from "./style";
import Logo from "../../components/Logo";
import FormLogin from "../../components/FormLogin";

const LoginPage = () => {
	const { login } = useContext(UserContext);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("@KenzieHub:token");

		if (token) {
			navigate("/dashboard", { replace: true });
		}
		setLoading(false);
	}, [navigate]);

	if (loading) {
		return null;
	}

	return (
		<StyledMain>
			<div>
				<Logo />
				<FormLogin login={login} />
			</div>
		</StyledMain>
	);
};

export default LoginPage;
