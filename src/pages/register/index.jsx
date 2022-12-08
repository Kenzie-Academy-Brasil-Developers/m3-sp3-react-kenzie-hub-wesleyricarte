import { useNavigate } from "react-router-dom";
import { StyledMain, StyledBoxRegister } from "./style";
import FormRegister from "../../components/formRegister";
import Button from "../../components/button";
import Logo from "../../components/logo";

const RegisterPage = ({ authentication }) => {
	const navigate = useNavigate();
	authentication && navigate("/dashboard");

	return (
		<StyledMain>
			<div>
				<Logo />
				<Button
					onClick={() => {
						navigate(-1);
					}}
				>
					Voltar
				</Button>
			</div>
			<StyledBoxRegister>
				<FormRegister navigate={navigate} />
			</StyledBoxRegister>
		</StyledMain>
	);
};

export default RegisterPage;
