import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LogInContext';
import { useProfileContext } from '../context/ProfileContext';
import InputEmail from "./inputs/InputEmail";
import InputPassword from './inputs/InputPassword';
import FormButton from './buttons/FormButton';

const LoginForm = () => {
  
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logInFunction, isLoggedIn, logInError, isAdmin, user } = useLoginContext();
  const { setProfile } = useProfileContext();
  const onSubmit = handleSubmit((values) => {
    logInFunction(values);
  });

  useEffect(() => {   
    if(!isAdmin && isLoggedIn){
      setProfile(user)
    } 
    if (isLoggedIn) navigate('/messages');
  }, [isLoggedIn]);

  return (
    <div  className='h-screen flex flex-col items-center justify-center mt-6'>
      <form className='flex flex-col items-center justify-center w-2/5 p-3 bg-zinc-200' onSubmit={onSubmit}>
        <InputEmail
          cssStyle='w-full px-3'
          labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 mb-3 leading-tight'
          errorStyle='text-red-500 text-xs italic mb-3'
          labelText='E-mail'
          id='login_email'
          register={register}
          errors={errors}
        />
        <InputPassword
          cssStyle='w-full px-3'
          labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 mb-3 leading-tight'
          errorStyle='text-red-500 text-xs italic mb-3'
          labelText='Password'
          id='login_password'
          register={register}
          errors={errors}
        />
        {logInError && <p>{logInError}</p>}
        <FormButton type={'submit'} textValue={'Log in'} activeStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100'/>
      </form>
    </div>
  );
};
export default LoginForm;
