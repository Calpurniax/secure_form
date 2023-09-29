import { useProfileContext } from '../context/ProfileContext';
import { useLoginContext } from '../context/LogInContext';
import ProfileArticle from '../components/ProfileArticle';
import { useState, useEffect } from 'react';
import FormUpdateUser from '../components/FormUpdateUser';

const EditProfile=()=>{

    const { searchUser, profile, setProfile } = useProfileContext();
    const { user, isAdmin } = useLoginContext();
    const [updateProfile, setUpdateProfile] = useState(false);
   

    const handleClick = () => {
        setUpdateProfile(!updateProfile);
      };

     useEffect(()=>{      
      async function callToProfile (){        
       try{
        const res= await searchUser(user.id)
        if(res.status===200) setProfile(res.data)
        else console.log(res)
      }       
         catch(error){
        console.log(error)
       }  
      }       
        if(!isAdmin) callToProfile()
         
     },[])

    return(
        <div>
            <h2>Your profile</h2>
            {profile && <ProfileArticle user={profile} />}
            <p>hola</p>
            <button id='update' onClick={handleClick}>
            update
            </button>
            {updateProfile&& <FormUpdateUser/>}
      </div>
    )

}
export default EditProfile