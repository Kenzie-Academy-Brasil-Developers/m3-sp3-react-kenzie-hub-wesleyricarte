import api from "../../../services/api";
import Button from "../../Button";
import {
	StyledDivButtonsModal,
	StyledFormUpdateTech,
	StyledHeaderModal,
	StyledModal,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateTechSchema } from "./updateTechSchema";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const ModalUpdateTech = ({
	setShowModalUpdateTech,
	techId,
	techTitle,
	techStatus,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(updateTechSchema, { setValidationContext: true }),
		defaultValues: "",
	});

	const onSubmitFunction = ({ title, status }) => {
		const newTech = { title, status };
		putTech(newTech);
	};

	const deleteFunction = (techId) => {
		deleteTech(techId);
	};

	async function putTech(newTech) {
		try {
			const request = await api.put("/users/techs/" + techId, newTech);

			const response = await request.data;

			toast.success(
				`Técnologia ${response.title} atualizada com status ${response.status}!`,
				{
					style: {
						border: "solid 2px var(--color-success)",
					},
					iconTheme: {
						primary: "var(--color-success)",
						secondary: "#ffffff",
					},
					duration: 5000,
				}
			);

			setTimeout(() => {
				setShowModalUpdateTech(false);
				window.location.reload();
			}, 2800);
		} catch (error) {
			console.error(error);
			toast.error(`${error.response.data.message}`, {
				style: {
					border: "solid 2px var(--color-negative)",
				},
				iconTheme: {
					primary: "var(--color-negative)",
					secondary: "#ffffff",
				},
				duration: 5000,
			});
		}
	}

	async function deleteTech(techId) {
		try {
			await api.delete("/users/techs/" + techId);

			toast.success(`Técnologia excluída!`, {
				style: {
					border: "solid 2px var(--color-success)",
				},
				iconTheme: {
					primary: "var(--color-success)",
					secondary: "#ffffff",
				},
				duration: 3000,
			});

			setTimeout(() => {
				setShowModalUpdateTech(false);
				window.location.reload();
			}, 2800);
		} catch (error) {
			console.error(error);
			toast.error(`${error.response.data.message}`, {
				style: {
					border: "solid 2px var(--color-negative)",
				},
				iconTheme: {
					primary: "var(--color-negative)",
					secondary: "#ffffff",
				},
				duration: 5000,
			});
		}
	}

	return (
		<StyledModal>
			<div>
				<StyledHeaderModal>
					<h3>Cadastrar Tecnologias</h3>
					<Button onClick={() => setShowModalUpdateTech(false)}>
						<AiOutlineClose />
					</Button>
				</StyledHeaderModal>
				<StyledFormUpdateTech onSubmit={handleSubmit(onSubmitFunction)}>
					<section>
						<label htmlFor="title">Nome</label>
						<input
							type="text"
							placeholder="Digite aqui a tecnologia"
							defaultValue={techTitle}
							{...register("title")}
						/>
						{errors.title?.message && <p>{errors.title.message}</p>}
					</section>
					<section>
						<label htmlFor="status">Selecionar Status</label>
						<select
							{...register("status")}
							defaultValue={techStatus}
						>
							<option value="Iniciante">Iniciante</option>
							<option value="Intermediário">Intermediário</option>
							<option value="Avançado">Avançado</option>
						</select>
						{errors.status?.message && (
							<p>{errors.status.message}</p>
						)}
					</section>
					<StyledDivButtonsModal>
						<Button className="btnSub" type="submit">
							Salvar Alterações
						</Button>
						<Button
							className="btnDel"
							type="button"
							onClick={() => deleteFunction(techId)}
						>
							Excluir
						</Button>
					</StyledDivButtonsModal>
					<Toaster />
				</StyledFormUpdateTech>
			</div>
		</StyledModal>
	);
};

export default ModalUpdateTech;
