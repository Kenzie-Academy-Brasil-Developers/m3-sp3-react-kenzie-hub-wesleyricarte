import { StyledMain } from "./style";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({
	authentication,
	setAuthentication,
	user,
	setUser,
}) => {
	const navigate = useNavigate();

	if (authentication !== true) {
		localStorage.clear();
		setUser({});
		navigate("/");
	}

	return (
		<StyledMain>
			<Header setAuthentication={setAuthentication} />
			<div>
				<div className="container">
					<section>
						<h2>Olá, {user.name}</h2>
						<h5>{user.course_module}</h5>
					</section>
				</div>
			</div>
			<main>
				<div className="container">
					<div className="div-develop">
						<h2>Que pena! Estamos em desenvolvimento :&#40;</h2>
						<h3>
							Nossa aplicação está em desenvolvimento, em breve
							teremos novidades
						</h3>
					</div>
				</div>
			</main>
		</StyledMain>
	);
};

export default DashboardPage;
