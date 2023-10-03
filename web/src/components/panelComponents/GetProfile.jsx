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
    <div className='flex flex-col items-center justify-center'>
      <form className='w-2/5 p-3 bg-zinc-200' onSubmit={onSubmit}>
        <label htmlFor='searchUser' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
        Search an user by ID
        </label>
        <input
          type='text'
          id='searchUser'
          className='appearance-none block w-full text-gray-700 py-2 px-4 mb-6 leading-tight'
          {...register('searchUser', { required: true })}
        />
        {errors.searchUser && <p>{errors.searchUser?.message}</p>}
        <FormButton type={'submit'} textValue={'Search'} activeStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 mb-3'/>
      </form>
    </div>
  );
};
export default GetProfile;
