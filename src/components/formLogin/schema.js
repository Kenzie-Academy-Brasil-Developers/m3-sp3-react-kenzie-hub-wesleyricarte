import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Informe um email válido"),

    password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "É necessário uma senha de pelos 8 caracteres")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
})