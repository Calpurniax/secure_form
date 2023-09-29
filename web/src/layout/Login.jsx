import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from "../schemas/userSchemas";
import { useLoginContext } from '../context/LogInContext';
import { useProfileContext } from '../context/ProfileContext';
import InputEmail from "../components/formComponents/InputEmail";
import InputPassword from '../components/formComponents/InputPassword';
import FormButton from '../components/FormButton';

const Login = () => {
  
  //const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(logInSchema) });

  const { logInFunction, isLoggedIn, logInError, isAdmin, user } = useLoginContext();
  const { setProfile } = useProfileContext();
  const onSubmit = handleSubmit((values) => {
    logInFunction(values);
  });

  useEffect(() => {   
    if(!isAdmin && isLoggedIn){
      setProfile(user)
    } 
    //if (isLoggedIn) navigate('/messages');
  }, [isLoggedIn]);

  return (
    <form className='form__login' onSubmit={onSubmit}>
      <InputEmail
        cssStyle={'form__login__input'}
        labelText={'E-mail'}
        id={'login_email'}
        register={register}
        errors={errors}
      />
      <InputPassword
        cssStyle={'form__login__input'}
        labelText={'Password'}
        id={'login_password'}
        register={register}
        errors={errors}
      />
      {logInError && <p>{logInError}</p>}
      <FormButton type={'submit'} textValue={'Log in'} />
    </form>
  );
};
export default Login;
