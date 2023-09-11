import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginContext } from "../context/LogInContext";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";


const Login = () => {
    const { register, handleSubmit, formState: {
        errors
    }} = useForm();
    const { logInFunction, isLoggedIn, user, logInError } = useLoginContext();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((values) => {        
        logInFunction(values)
    })
    useEffect(() => {
        console.log(user)
        if (isLoggedIn) navigate('/')
    }, [isLoggedIn])

    return (
        <form className='form__login' onSubmit={onSubmit}>            
            <InputEmail
                cssStyle={'form__login__input'}
                labelText={'E-mail'}
                id={'login_email'}
                register={register}
                errors={errors} />
            <InputPassword
                cssStyle={'form__login__input'}
                labelText={'Password'}
                id={'login_password'}
                register={register}
                errors={errors} />
            {logInError && (<p>{logInError}</p>)}
            <Button type={"submit"}
                textValue={"Log in"} />           
        </form>
    )
}
export default Login