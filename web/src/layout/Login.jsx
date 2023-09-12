import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginContext } from '../context/LogInContext';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();

  const logInSchema = yup.object({
    login_email: yup.string
      .required('An e-mail is required')
      .email('E-mail format is not valid'),
    login_password: yup.string.required('A password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(logInSchema) });

  const { logInFunction, isLoggedIn, logInError } = useLoginContext();

  const onSubmit = handleSubmit((values) => {
    logInFunction(values);
  });

  useEffect(() => {
    if (isLoggedIn) navigate('/');
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
      <Button type={'submit'} textValue={'Log in'} />
    </form>
  );
};
export default Login;
