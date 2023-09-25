import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputPassword from "../formComponents/InputPassword.jsx";
import { registerSchema } from "../../schemas/userSchemas.jsx";
import { useProfileContext } from '../../context/ProfileContext.jsx';


const ChangePassword =()=>{

    const { profile, updatePassword } = useProfileContext();
    
    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm({ resolver: yupResolver(registerSchema) });

    const onSubmit= handleSubmit(async (values)=>{
        const response = updatePassword(profile._id, values)
        if(response.status===200) reset()
        else console.log(response)
    })
    return(
        <form className='form__password' onSubmit={onSubmit}>
           < InputPassword
           cssStyle={'form__password__input'}
           labelText={'Password'}
           id={'password'}
           register={register}
           errors={errors} />
        </form>
    )
}
export default ChangePassword