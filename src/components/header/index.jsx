import Logo from "../Logo";
import Button from "../Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeader, StyledNav } from "./style";
import { Navigate } from "react-router-dom";

const Header = () => {
	const { setUser } = useContext(UserContext);
	const [authorization, setAuthorization] = useState(true);

	if (!authorization) {
		setUser(null);
		<Navigate to="/" />;
	}

	return (
		<StyledHeader>
			<StyledNav>
				<Logo />
				<Button
					onClick={() => {
						setAuthorization(false);
						localStorage.removeItem("@KenzieHub:token");
						localStorage.removeItem("@KenzieHub:userId");
					}}
				>
					Sair
				</Button>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
