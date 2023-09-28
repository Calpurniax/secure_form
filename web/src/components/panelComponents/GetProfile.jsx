import InputText from '../formComponents/InputText';
import FormButton from '../FormButton';
import { useForm } from 'react-hook-form';
import { useProfileContext } from '../../context/ProfileContext';
import { useNavigate } from 'react-router-dom';

const GetProfile = () => {
  const { searchUser, profile, setProfile } = useProfileContext();
  const navigate = useNavigate();
  const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {      
    const id = JSON.stringify(values.searchUser).replace(/['"]+/g, '');   
    const res = await searchUser(id);
    if (res.status === 200) { 
        console.log(res.data) 
        
        navigate(`/panel/${profile._id}`)
    }
  });

  return (
    <form className='panel__search' onSubmit={onSubmit}>
      <InputText
        cssStyle={'panel__search__input'}
        labelText={'search an user by ID'}
        id={'searchUser'}
        register={register}
        errors={errors}
      />
      <FormButton type={'submit'} textValue={'Search'} />
    </form>
  );
};
export default GetProfile;
