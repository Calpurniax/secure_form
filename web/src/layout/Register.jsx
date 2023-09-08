import {useForm} from 'react-hook-form';
import InputUserName from "../components/InputUserName";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";

const Register = () => {
    const {register} = useForm();
    return (
       <form className='form__register'>
        <InputEmail
        cssStyle={'form__register__input'}
        labelText={'E-mail'}        
        id={'register_email'}        
        register={register}/>
        <InputUserName
        cssStyle={'form__register__input'}
        labelText={'Name'}        
        id={'register_name'}        
        register={register}/>
        <InputPassword
        cssStyle={'form__register__input'}
        labelText={'Password'}        
        id={'register_password'}        
        register={register}/>
       </form>
    )
}
export default Register