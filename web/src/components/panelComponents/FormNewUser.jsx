import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from "../formComponents/InputText.jsx";
import InputEmail from "../formComponents/InputEmail.jsx";
import InputPassword from "../formComponents/InputPassword.jsx";
import FormButton from "../FormButton.jsx";
import { registerSchema } from "../../schemas/userSchemas.jsx";
import { registerUser } from '../../services/profileEndpoints';


const FormNewUser = () => {
    const [registerStatus, setRegisterStatus] = useState(null)
    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm({ resolver: yupResolver(registerSchema) });

    const onSubmit = handleSubmit(async (values) => {
        try {
            const res = await registerUser(values)
            if (res.status === 201) {
                reset()
                setRegisterStatus('Register was successful')
            }
        } catch (error) {
            setRegisterStatus('Register was not successful')
        }
    })

    return (
        <form className='form__register' onSubmit={onSubmit}>
            <InputEmail
                cssStyle={'form__register__input'}
                labelText={'E-mail'}
                id={'register_email'}
                register={register}
                errors={errors} />
            <InputText
                cssStyle={'form__register__input'}
                labelText={'User name'}
                id={'register_username'}
                register={register}
                errors={errors}
                placeholder='Dua_Lipa99' />
            <InputPassword
                cssStyle={'form__register__input'}
                labelText={'Password'}
                id={'register_password'}
                register={register}
                errors={errors} />
            <InputText
                cssStyle={'form__register__input'}
                labelText={'Name'}
                id={'register_name'}
                register={register}
                errors={errors}
                placeholder='Dua' />
            <InputText
                cssStyle={'form__register__input'}
                labelText={'Last name'}
                id={'register_lastname'}
                register={register}
                errors={errors}
                placeholder='Lipa' />
            {registerStatus && (<p>{registerStatus}</p>)}
            <FormButton type={"submit"}
                textValue={"Register"} />
        </form>
    )

}
export default FormNewUser