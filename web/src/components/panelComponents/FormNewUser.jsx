import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from "../formComponents/InputText.jsx";
import InputEmail from "../formComponents/InputEmail.jsx";
import InputPassword from "../formComponents/InputPassword.jsx";
import FormButton from "../FormButton.jsx";
import { registerSchema } from "../../schemas/userSchemas.jsx";
import { registerUser, updateUser } from '../../services/profileEndpoints';
import { useParams, useNavigate } from 'react-router-dom';
import { useProfileContext } from '../../context/ProfileContext.jsx';


const FormNewUser = () => {
    const [registerStatus, setRegisterStatus] = useState(null)
    const params = useParams()
    const navigate = useNavigate();
    const { profile } = useProfileContext();
    const [changePassword, setChangePassword] = useState(false)
    const { register, handleSubmit, reset, setValue, formState: {
        errors
    } } = useForm({ resolver: yupResolver(registerSchema) });

    useEffect(() => {
        console.log(params)
        if (params.id) {
            if (!profile) return alert('No user found, please search an user for the update')
            console.log(profile)
            setValue('register_email', profile.email)
            setValue('register_username', profile.username)        
            setValue('register_name', profile.name)
            setValue('register_lastname', profile.lastname)
        }
    }, [])

    const onSubmit = handleSubmit(async (values) => {
       
        if (params.id) {
            try {
                const res = await updateUser(values, params.id)
                if (res.status === 200) {
                    reset()
                    setRegisterStatus('Update was successful')
                }
            } catch (error) {
                setRegisterStatus('Update was not successful')
            }
        } else {
            try {
                const res = await registerUser(values)
                if (res.status === 201) {
                    reset()
                    setRegisterStatus('Register was successful')
                }
            } catch (error) {
                setRegisterStatus('Register was not successful')
            }
        }
    })
    const handleClick=()=>{
        navigate(`/password/${profile._id}`)
    }

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
            {params.id ?
                <p>If you wish to change the password, it will get you to another page<button onClick={handleClick}>Yes, change password</button></p>
                 :
                <InputPassword
                    cssStyle={'form__register__input'}
                    labelText={'Password'}
                    id={'register_password'}
                    register={register}
                    errors={errors} />
            }

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
                textValue={"Send"} />
        </form>
    )

}
export default FormNewUser