  import { useLoginContext } from '../context/LogInContext';
import { useState, useEffect } from 'react';
import ProfileArticle from './ProfileArticle';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import FormButton from './FormButton.jsx';

const UserProfile = () => {
  const { user, updateOwnProfile} = useLoginContext();
  const params = useParams();
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(null);
  const handleClick = () => {
    setUpdateProfile(!updateProfile);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {    
    setValue('email', user.email);
    setValue('username', user.username);
    setValue('name', user.name);
    setValue('lastname', user.lastname);    
  }, []);

  const updateSubmit = handleSubmit(async (values) => {    
    try {
      const res = await  updateOwnProfile(params.id, values);      
      if (res.status === 200) {
        reset();
        setUpdateStatus('Update was successful');
      }
    } catch (error) {
      setUpdateStatus('Update was not successful');
    }
  });

  return (
    <div>
      <h2>Your profile</h2>
      <ProfileArticle user={user} />
      <button id='update' onClick={handleClick}>
        update
      </button>
      {updateProfile && 
      <form className='form__update' onSubmit={updateSubmit}>
      <div className='form__update__input'>
           <label htmlFor='email'>E-mail</label>
           <input type="email" name='email' id='email' placeholder='user@email.com' autoComplete="true" {...register('email',{                
               pattern:{
                   value:/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
                   message:"E-mail adress is not valid"
               },
               maxLength:{
                   value:100,
                   message:`This field should be less than 100 characters`
               },
               })}/>
           {errors.email && (<p>{errors.email?.message}</p>)}
       </div>
       <div className='form__update__input'>
           <label htmlFor='password'>Password</label>
           <input type="password" name='password' id='password' {...register('password',{               
               pattern:{
                   value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!¡%*¿?&])[A-Za-z\d@$!¡%*¿?&]{8,}$/,
                   message: "Password needs to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (@$!¡%*¿?&)"
               }                
           })} />
           {errors.password && (<p>{errors.password?.message}</p>)}
       </div>
       <div className='form__update__input'>
           <label htmlFor='username'>User name</label>
           <input type="text" name='username' id='username' placeholder='Dua_Lipa99'{...register('username', {
               maxLength: {
                   value: 8,
                   message: `This field should be less than 8 characters`
               },
           })} />
           {errors.username && (<p>{errors.username?.message}</p>)}
       </div>
       <div className='form__update__input'>
           <label htmlFor='name'>Name</label>
           <input type="text" name='name' id='name' placeholder='Dua'{...register('name')} />           
       </div>
       <div className='form__update__input'>
           <label htmlFor='lastname'>Last name</label>
           <input type="text" name='lastname' id='lastname' placeholder='Lipa'{...register('lastname')} />           
       </div>     
     {updateStatus && <p>{updateStatus}</p>}     
     <FormButton type={'submit'} textValue={'Send'} />
   </form>}
    </div>
  );
};
export default UserProfile;
