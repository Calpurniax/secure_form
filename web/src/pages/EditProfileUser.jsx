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
           <ProfileEdit handleClick={handleClick}/>
           {updateProfile && <UpdateUserForm/>}
        </Layout>
    )
}

export default EditProfileUser