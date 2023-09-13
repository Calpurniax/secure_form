import * as yup from 'yup';

export const logInSchema = yup.object({
    login_email: yup.string()
      .required('An e-mail is required')
      .email('E-mail format is not valid'),
    login_password: yup.string().required('A password is required'),
  });


export  const registerSchema = yup.object({
    register_email: yup
    .string()
    .required("An e-mail is required")
    .email("E-mail format is not valid"),
    register_username: yup.string().required("An user name is required"),
    register_password: yup.string().required("A password is required"),   
    register_name: yup.string().required("A name is required"),
    register_lastname: yup.string().required("A last name is required"),
})


 //para marcar la longitud mínima de 8 caracters a la contraseña:  register_password: yup.string().min(8).required("A password is required"),

