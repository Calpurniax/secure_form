import { useForm } from 'react-hook-form';
import { login } from "../services/auth";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        const res = await login(values)
        console.log(res)
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