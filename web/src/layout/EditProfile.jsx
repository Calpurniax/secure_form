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
        <div className='h-screen flex flex-col md:flex-row justify-center items-center md:justify-around'>
            <div className='flex flex-col justify-center items-center mt-6'>
              <h2 className='mb-8 text-2xl'>Your profile</h2>
              {profile && <ProfileArticle user={profile} />}
              <button id='update' className='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 w-48 my-6' onClick={handleClick}>
            update
            </button>
            </div>         
           
            {updateProfile&& <FormUpdateUser/>}
      </div>
    )

}
export default EditProfile