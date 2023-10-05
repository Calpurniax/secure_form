import { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProfileEdit from '../components/ProfileEdit'
import UpdateUserForm from '../components/UpdateUserForm';

const EditProfileUser =()=>{

    const [updateProfile, setUpdateProfile] = useState(false);
    const handleClick = () => {
        setUpdateProfile(!updateProfile);
      }; 

    return(
        <Layout>
           <div className='flex flex-col md:flex-row justify-center items-center md:justify-around mt-8'>
               <ProfileEdit handleClick={handleClick}/>
               {updateProfile && <UpdateUserForm/>}
           </div>
        </Layout>
    )
}

export default EditProfileUser