import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth'
import InputUserName from "../components/InputText";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";

const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null)
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

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
            <InputUserName
                cssStyle={'form__register__input'}
                labelText={'Name'}
                id={'register_name'}
                register={register}
                errors={errors}
                placeholder='Dua Lipa' />
            <InputPassword
                cssStyle={'form__register__input'}
                labelText={'Password'}
                id={'register_password'}
                register={register}
                errors={errors} />
            {registerError && (<p>{registerError}</p>)}
            <Button type={"submit"}
                textValue={"Register"} />
        </form>
    )
}
export default Register