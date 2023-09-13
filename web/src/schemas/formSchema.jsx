import * as yup from "yup";

export const contactSchema = yup.object({
    contact_email: yup
    .string()
    .required("An e-mail is required")
    .email("E-mail format is not valid"),
    contact_name: yup.string().required("A name is required"),
    contact_subject: yup.string().required("A subject is required"),
    contact_message: yup.string().required("A message is required"),
    contact_testInput1: yup.string(),
    contact_testInput2:yup.string(),
})