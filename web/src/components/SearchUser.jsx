import InputText from "./formComponents/InputText";
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useProfileContext } from '../context/ProfileContext';

const GetProfile = () => {
    const { searchUser}= useProfileContext()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit(async (values) => {       
        const id = JSON.stringify(values.searchUser).replace(/['"]+/g, '')        
        return await searchUser(id)
    });

    return (
        <form className='panel__search' onSubmit={onSubmit}>
            <InputText
                cssStyle={'panel__search__input'}
                labelText={'search an user by ID'}
                id={'searchUser'}
                register={register}
                errors={errors} />
            <Button type={'submit'} textValue={'Search'} />
        </form>
    )
}
export default GetProfile