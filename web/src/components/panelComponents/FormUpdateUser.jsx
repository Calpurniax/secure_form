import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../formComponents/InputText.jsx';
import InputEmail from '../formComponents/InputEmail.jsx';
import FormButton from '../FormButton.jsx';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateSchema } from '../../schemas/userSchemas.jsx';
import { useProfileContext } from '../../context/ProfileContext.jsx';
import { updateUser } from '../../services/profileEndpoints';
import { useParams } from 'react-router-dom';

const FormUpdateUser = () => {
  const [updateStatus, setUpdateStatus] = useState(null);
  const params = useParams();
  const { profile } = useProfileContext();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateSchema) });

  useEffect(() => {
    if (!profile)
      return alert('No user found, please search an user for the update');
    setValue('email', profile.email);
    setValue('username', profile.username);
    setValue('name', profile.name);
    setValue('lastname', profile.lastname);
    //setValue('register_password', profile.password);
  }, []);

  const onSubmit = handleSubmit(async (values) => {
    debugger;
    try {
      const res = await updateUser(params.id, values);
      if (res.status === 201) {
        reset();
        setUpdateStatus('Update was successful');
      }
    } catch (error) {
      setUpdateStatus('Update was not successful');
    }
  });

  return (
    <form className='form__register' onSubmit={onSubmit}>
      <InputEmail
        cssStyle={'form__register__input'}
        labelText={'E-mail'}
        id={'email'}
        register={register}
        errors={errors}
      />
      <InputText
        cssStyle={'form__register__input'}
        labelText={'User name'}
        id={'username'}
        register={register}
        errors={errors}
        placeholder='Dua_Lipa99'
      />
      <InputText
        cssStyle={'form__register__input'}
        labelText={'Name'}
        id={'name'}
        register={register}
        errors={errors}
        placeholder='Dua'
      />
      <InputText
        cssStyle={'form__register__input'}
        labelText={'Last name'}
        id={'lastname'}
        register={register}
        errors={errors}
        placeholder='Lipa'
      />
      {updateStatus && <p>{updateStatus}</p>}
      <FormButton type={'submit'} textValue={'Send'} />
    </form>
  );
};
export default FormUpdateUser;
