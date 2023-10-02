import FormButton from '../FormButton';
import { useForm } from 'react-hook-form';
import { useProfileContext } from '../../context/ProfileContext';
import { useNavigate } from 'react-router-dom';

const GetProfile = () => {
  const { searchUser, profile } = useProfileContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {   
    const id = JSON.stringify(values.searchUser).replace(/['"]+/g, '');   
    try {
      const res = await searchUser(id);
      if (res.status === 200) {
        navigate(`/panel/${profile.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form className='panel__search' onSubmit={onSubmit}>
      <label htmlFor='searchUser'> Search an user by ID </label>
      <input
        type='text'
        id='searchUser'
        className='panel__search__input'
        {...register('searchUser', { required: true })}
      />
      {errors.searchUser && <p>{errors.searchUser?.message}</p>}      
      <FormButton type={'submit'} textValue={'Search'} />
    </form>
  );
};
export default GetProfile;
