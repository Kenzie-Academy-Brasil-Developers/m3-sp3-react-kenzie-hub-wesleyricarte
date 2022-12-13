import * as yup from "yup"

export const updateTechSchema = yup.object().shape({
    title: yup
        .string()
        .required("Insira a tecnlogia")
        .min(2, "Mínimo 2 caracteres")
        .max(40, "Máximo 40 caracteres"),

    status: yup
        .string()
        .required("Status obrigatório")
});