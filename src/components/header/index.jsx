import Button from "../button";
import Logo from "../logo";
import { StyledHeader, StyledNav } from "./style";

const Header = ({ setAuthentication }) => {
	return (
		<StyledHeader>
			<StyledNav>
				<Logo />
				<Button onClick={() => setAuthentication(false)}>Sair</Button>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
