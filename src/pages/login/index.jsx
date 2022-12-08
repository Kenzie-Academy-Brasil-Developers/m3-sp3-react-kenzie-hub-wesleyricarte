import Logo from "../../components/logo";
import { StyledMain } from "./style";
import FormLogin from "../../components/formLogin";

const LoginPage = ({ authentication, setAuthentication, setUser }) => {
	return (
		<StyledMain>
			<div>
				<Logo />
				<FormLogin
					authentication={authentication}
					setAuthentication={setAuthentication}
					setUser={setUser}
				/>
			</div>
		</StyledMain>
	);
};

export default LoginPage;
