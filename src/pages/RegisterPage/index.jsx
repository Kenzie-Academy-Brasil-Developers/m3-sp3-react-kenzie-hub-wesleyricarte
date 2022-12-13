import Logo from "../../components/Logo";
import Button from "../../components/Button";
import FormRegister from "../../components/FormRegister";
import { useNavigate } from "react-router-dom";
import { StyledMain, StyledBoxRegister } from "./style";

const RegisterPage = () => {
	const navigate = useNavigate();

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
