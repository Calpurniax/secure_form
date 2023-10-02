import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormButton from './FormButton.jsx';
import { useProfileContext } from '../context/ProfileContext.jsx';
import { useParams } from 'react-router-dom';

const FormUpdateUser = () => {
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
    <form className='form__update' onSubmit={updateSubmit}>
      <div className='form__update__input'>
        <label htmlFor='email'>E-mail</label>
        <input
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
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      <div className='form__update__input'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
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
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
      <div className='form__update__input'>
        <label htmlFor='username'>User name</label>
        <input
          type='text'
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
        {errors.username && <p>{errors.username?.message}</p>}
      </div>
      <div className='form__update__input'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
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
      </div>
      <div className='form__update__input'>
        <label htmlFor='lastname'>Last name</label>
        <input
          type='text'
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
      </div>
      {updateStatus && <p>{updateStatus}</p>}
      <FormButton type={'submit'} textValue={'Send'} />
    </form>
  );
};
export default FormUpdateUser;
