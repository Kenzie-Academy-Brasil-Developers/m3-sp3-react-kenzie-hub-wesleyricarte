import Button from "../../Button";
import { StyledFormAddTech, StyledHeaderModal, StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTechSchema } from "./addTechSchema";
import { Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

const ModalAddTech = ({ setShowModalAddTech }) => {
	const { postTech } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(addTechSchema, { setValidationContext: true }),
		defaultValues: "",
	});

	const onSubmitFunction = ({ title, status }) => {
		const newTech = { title, status };
		postTech(newTech);
		setShowModalAddTech(false);
		setTimeout(() => {
			window.location.reload();
		}, 2800);
	};

	return (
		<StyledModal>
			<div>
				<StyledHeaderModal>
					<h3>Cadastrar Tecnologias</h3>
					<Button onClick={() => setShowModalAddTech(false)}>
						<AiOutlineClose />
					</Button>
				</StyledHeaderModal>
				<StyledFormAddTech onSubmit={handleSubmit(onSubmitFunction)}>
					<section>
						<label htmlFor="title">Nome</label>
						<input
							type="text"
							placeholder="Digite aqui a tecnologia"
							defaultValue=""
							{...register("title")}
						/>
						{errors.title?.message && <p>{errors.title.message}</p>}
					</section>
					<section>
						<label htmlFor="status">Selecionar Status</label>
						<select {...register("status")}>
							<option value="Iniciante">Iniciante</option>
							<option value="Intermediário">Intermediário</option>
							<option value="Avançado">Avançado</option>
						</select>
						{errors.status?.message && (
							<p>{errors.status.message}</p>
						)}
					</section>
					<Button type="submit">Cadastrar Tecnologia</Button>
					<Toaster />
				</StyledFormAddTech>
			</div>
		</StyledModal>
	);
};

export default ModalAddTech;
