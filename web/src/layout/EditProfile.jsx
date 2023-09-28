import { useProfileContext } from '../../context/ProfileContext';
import { useLoginContext } from '../context/LogInContext';
import ProfileArticle from '../components/ProfileArticle';
import { useState, useEffect } from 'react';

const EditProfile=()=>{

    const { searchUser, profile, setProfile } = useProfileContext();
    const { user} = useLoginContext();
    const [updateProfile, setUpdateProfile] = useState(false);

    const handleClick = () => {
        setUpdateProfile(!updateProfile);
      };

     useEffect(()=>{
        //quizás esto es asincrono
        const userFound= searchUser(user.id)
        setProfile(userFound)
     },[])

    return(
        <div>
            <h2>Your profile</h2>
            <ProfileArticle user={user} />
            <button id='update' onClick={handleClick}>
        update
      </button>
      </div>
    )

}
export default EditProfile