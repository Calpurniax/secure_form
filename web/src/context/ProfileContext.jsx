import { createContext, useContext, useState } from 'react';
import { getUserbyId } from '../services/getUsers';
export const ProfileContext = createContext();

export const useProfileContext = () => {
    const context = useContext(ProfileContext);
    if (!context) throw new Error("useProfile must be used within an ProfileProvider")
    return context;
}

export const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);

    const searchUser = async (id) => {
        try {
            const res = await getUserbyId(id)
            if (res.status === 200) {
                setProfile(res.data)
                return res
            }
        }
        catch (error) {
            console.log('Sorry, profile not available')
        }
    }
    const 

    return (
        <ProfileContext.Provider value={{ profile, setProfile, searchUser }}>
            {children}
        </ProfileContext.Provider>
    )
}