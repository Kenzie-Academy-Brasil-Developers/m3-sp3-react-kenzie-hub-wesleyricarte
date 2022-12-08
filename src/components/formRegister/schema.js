import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nome obrigatório")
        .min(3, "Mínimo 3 caracteres.")
        .max(200, "Nome muito longo"),

    email: yup
        .string()
        .required("Email obrigatório")
        .email("Informe um email válido"),

    password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "É necessário uma senha de pelos 8 caracteres")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial"),

    passwordCheck: yup
        .string()
        .required("Confirmação obrigatória da senha")
        .oneOf([yup.ref("password")], "As senhas devem conferir"),

    bio: yup.string().required("Bio obrigatória"),

    contact: yup.string().required("Contato obrigatório"),

    course_module: yup.string("Selecione o módulo atual").required("Módulo obrigatório")
});