import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useProfileContext } from '../context/ProfileContext.jsx';
import FormButton from './buttons/FormButton.jsx';

const UpdateUserForm = () => {
  const [updateStatus, setUpdateStatus] = useState(null);
  const params = useParams();
  const { profile, updateUser, searchUser, setProfile } = useProfileContext();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await searchUser(params.id);
        if (res.status === 200) setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (!profile) getProfile();
    setValue('email', profile.email);
    setValue('username', profile.username);
    setValue('name', profile.name);
    setValue('lastname', profile.lastname);
  }, []);

  const updateSubmit = handleSubmit(async (values) => {
    try {
      const res = await updateUser(values, params.id);
      if (res.status === 200) {
        reset();
        setUpdateStatus('Update was successful');
      }
    } catch (error) {
      setUpdateStatus('Update was not successful');
    }
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      <form className='w-4/5 p-3 bg-zinc-200' onSubmit={updateSubmit}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor='email' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>E-mail</label>
            <input
              className='appearance-none block w-full text-gray-700 py-2 px-4 mb-3 leading-tight'
              type='email'
              name='email'
              id='email'
              placeholder='user@email.com'
              autoComplete='true'
              {...register('email', {
                pattern: {
                  value: /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'E-mail is not valid',
                },
                maxLength: {
                  value: 100,
                  message: `This field should be less than 100 characters`,
                },
              })}
            />
            {errors.email && <p className='text-red-500 text-xs italic'>{errors.email?.message}</p>}
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label htmlFor='username' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>User name</label>
            <input
              type='text'
              className='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
              name='username'
              id='username'
              placeholder='Dua_Lipa99'
              {...register('username', {
                maxLength: {
                  value: 8,
                  message: `This field should be less than 8 characters`,
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only letters are allowed for this field.',
                },
              })}
            />
            {errors.username && <p className='text-red-500 text-xs italic'>{errors.username?.message}</p>}
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label htmlFor='password' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
            <input
              type='password'
              className='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
              name='password'
              id='password'
              {...register('password', {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!¡%*¿?&])[A-Za-z\d@$!¡%*¿?&]{8,}$/,
                  message:
                    'Password needs to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (@$!¡%*¿?&)',
                },
              })}
            />
            {errors.password && <p className='text-red-500 text-xs italic'>{errors.password?.message}</p>}
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label htmlFor='name' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Name</label>
            <input
              type='text'
              className='appearance-none block w-full text-gray-700 py-2 px-4 mb-3 leading-tight'
              name='name'
              id='name'
              placeholder='Dua'
              {...register('name', {
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only letters are allowed for this field.',
                },
              })}
            />
             {errors.name && <p className='text-red-500 text-xs italic'>{errors.name?.message}</p>}
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label htmlFor='lastname' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Last name</label>
            <input
              type='text'
              className='appearance-none block w-full text-gray-700 py-2 px-4 leading-tight'
              name='lastname'
              id='lastname'
              placeholder='Lipa'
              {...register('lastname', {
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only letters are allowed for this field.',
                },
              })}
            />
            {errors.lastname && <p className='text-red-500 text-xs italic'>{errors.lastname?.message}</p>}
          </div>
        </div>
        {updateStatus && <p className='mb-6'>{updateStatus}</p>}
        <FormButton type={'submit'} textValue={'Send'} activeStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 mb-6'/>
      </form>
    </div>
  );
};
export default UpdateUserForm;
