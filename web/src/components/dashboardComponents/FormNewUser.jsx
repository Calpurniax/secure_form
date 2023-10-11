import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/profileEndpoints';
import InputText from '../inputs/InputText.jsx';
import InputEmail from '../inputs/InputEmail.jsx';
import InputPassword from '../inputs/InputPassword.jsx';
import FormButton from '../buttons/FormButton.jsx';


const FormNewUser = () => {
  const [registerStatus, setRegisterStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await registerUser(values);
      if (res.status === 201) {
        reset();
        setRegisterStatus('Register was successful');
      }
    } catch (error) {
      setRegisterStatus('Register was not successful');
    }
  })

  return (
    <div className='flex flex-col items-center justify-center'>
      <form className='w-4/5 p-3 bg-zinc-200' onSubmit={onSubmit}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <InputEmail
            cssStyle='w-full md:w-1/2 px-3 mb-6 md:mb-0'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 mb-3 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='E-mail'
            id='register_email'
            register={register}
            errors={errors}
          />
          <InputText
            cssStyle='w-full md:w-1/2 px-3'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='User name'
            id='register_username'
            register={register}
            errors={errors}
            placeholder='RadiaP'
          />
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <InputPassword
            cssStyle='w-full px-3'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='Password'
            id='register_password'
            register={register}
            errors={errors}
          />
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <InputText
            cssStyle='w-full md:w-1/2 px-3 mb-6 md:mb-0'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='Name'
            id='register_name'
            register={register}
            errors={errors}
            placeholder='Radia'
          />

          <InputText
            cssStyle='w-full md:w-1/2 px-3'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText={'Last name'}
            id={'register_lastname'}
            register={register}
            errors={errors}
            placeholder='Perlman'
          />
        </div>
        {registerStatus && <p>{registerStatus}</p>}
        <FormButton type={'submit'} activeStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 mb-6' textValue={'Send'} />
      </form>
    </div>
  );
};
export default FormNewUser;
