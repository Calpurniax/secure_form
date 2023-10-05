import { useEffect } from 'react';
import { useProfileContext } from '../context/ProfileContext';
import { useLoginContext } from '../context/LogInContext';
import ProfileArticle from './articles/ProfileArticle';

const ProfileEdit =({handleClick})=>{

    const { searchUser, profile, setProfile } = useProfileContext();
    const { user, isAdmin } = useLoginContext();  
   
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
        <section className='h-screen flex flex-col md:flex-row justify-center items-center md:justify-around'>
            <div className='flex flex-col justify-center items-center mt-6'>
              <h2 className='mb-8 text-2xl'>Your profile</h2>
              {profile && <ProfileArticle user={profile} />}
              <button id='update' className='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 w-48 my-6' onClick={handleClick}>
            update
            </button>
            </div>       
        </section>
    )

}
export default ProfileEdit