import Header from "../../components/Header";
import Button from "../../components/Button";
import { StyledMain } from "./style";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import ModalAddTech from "../../components/modals/ModalAddTech";
import ModalUpdateTech from "../../components/modals/ModalUpdateTech";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
	const { user } = useContext(UserContext);
	const [techs, setTechs] = useState([]);
	const [showModalAddTech, setShowModalAddTech] = useState(false);
	const [showModalUpdateTech, setShowModalUpdateTech] = useState(false);

	const [techId, setTechId] = useState("");
	const [techTitle, setTechTitle] = useState("");
	const [techStatus, setTechStatus] = useState("");

	useEffect(() => {
		setTechs(user.techs);
	}, [user]);

	const getTechProps = (techIdProp, techTitleProp, techStatusProp) => {
		setShowModalUpdateTech(true);

		setTechId(techIdProp);
		setTechTitle(techTitleProp);
		setTechStatus(techStatusProp);
	};

	return (
		<>
			{showModalAddTech && (
				<ModalAddTech setShowModalAddTech={setShowModalAddTech} />
			)}
			{showModalUpdateTech && (
				<ModalUpdateTech
					setShowModalUpdateTech={setShowModalUpdateTech}
					techId={techId}
					techTitle={techTitle}
					techStatus={techStatus}
				/>
			)}
			<StyledMain>
				<Header />
				<div className="divWellcome">
					<div className="container">
						<section>
							<h2>Olá, {user.name}</h2>
							<h5>{user.course_module}</h5>
						</section>
					</div>
				</div>
				<div className="divMainContent">
					<div className="mainContainer">
						<section>
							<h3>Tecnologias</h3>
							<Button onClick={() => setShowModalAddTech(true)}>
								<AiOutlinePlus />
							</Button>
						</section>
						{techs.length > 0 ? (
							<ul>
								{techs?.map((tech) => (
									<li
										key={tech.id}
										onClick={() =>
											getTechProps(
												tech.id,
												tech.title,
												tech.status
											)
										}
									>
										<h4>{tech.title}</h4>;
										<div>
											<h5>{tech.status}</h5>
											<Button id={tech.id}>
												<HiOutlineTrash />
											</Button>
										</div>
									</li>
								))}
							</ul>
						) : (
							<div className="divNoTechs">
								<h4>
									Você ainda não possui tecnologias, adicione
								</h4>
							</div>
						)}
					</div>
				</div>
			</StyledMain>
		</>
	);
};

export default DashboardPage;
