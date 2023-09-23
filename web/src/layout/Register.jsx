import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/msgAndUsers';
import FormNewUser from '../components/FormNewUser';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../schemas/userSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null)
    const { handleSubmit
    } = useForm({ resolver: yupResolver(registerSchema) });
 

    const submitForm = handleSubmit(async (values) => {
        try {
            const res = await registerUser(values)
            if (res.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            setRegisterError('Register was not successful')
        }
    })
    return (
        <FormNewUser registerError={registerError}
        submitForm={submitForm}
        />
    )
}
export default Register