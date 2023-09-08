import {useForm} from 'react-hook-form';
import {registerUser} from '../services/auth'
import InputUserName from "../components/InputUserName";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";

const Register = () => {
    const {register, handleSubmit} = useForm();
    return (
       <form className='form__register' onSubmit={handleSubmit(async(values)=>{
        console.log(values)
        const res = await registerUser(values)
        console.log(res)
       })}>
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
        <Button type={"submit"}
        textValue={"Register"}/>
       </form>
    )
}
export default Register