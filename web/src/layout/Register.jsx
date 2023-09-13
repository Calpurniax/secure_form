import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from "../schemas/userSchemas";
import { registerUser } from '../services/auth'
import InputText from "../components/InputText";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";

const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null)

    const { register, handleSubmit, formState: {
        errors
    } } = useForm({ resolver: yupResolver(registerSchema) });

    const onSubmit = handleSubmit(async (values) => {
        try {
            const res = await registerUser(values)
            if (res.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            setRegisterError('Register was not successful')
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
            {registerError && (<p>{registerError}</p>)}
            <Button type={"submit"}
                textValue={"Register"} />
        </form>
    )
}
export default Register