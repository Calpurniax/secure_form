import InputText from "./formComponents/InputText";
import Button from './Button';
import { useForm } from 'react-hook-form';
import {getProfile} from '../services/auth.js';

const GetProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((values) => {
        console.log(values)
        getProfile(values)
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