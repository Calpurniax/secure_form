import { useForm } from 'react-hook-form';

import {useLoginContext} from "../context/LogInContext";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {logInContext} =useLoginContext;
    const onSubmit = handleSubmit(async (values) => {
        logInContext(values)        
    })
    return (
        <form className='form__login' onSubmit={onSubmit}>
            <InputEmail
                cssStyle={'form__login__input'}
                labelText={'E-mail'}
                id={'login_email'}
                register={register} />
            <InputPassword
                cssStyle={'form__login__input'}
                labelText={'Password'}
                id={'login_password'}
                register={register} />
            <Button type={"submit"}
                textValue={"Log in"} />
        </form>
    )
}
export default Login