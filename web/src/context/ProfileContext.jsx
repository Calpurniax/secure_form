import { createContext, useContext, useState } from 'react';
import {
  getUserbyId,
  deleteUserRequest,
  updateUserRequest,
} from '../services/profileEndpoints';
import {
  ownUserRequest,
  updateOwnUserRequest,
} from '../services/userEndpoints';
import { useLoginContext } from '../context/LogInContext';

export const ProfileContext = createContext();

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context)
    throw new Error('useProfile must be used within an ProfileProvider');
  return context;
};

export const ProfileProvider = ({ children }) => {
  const { isAdmin, user} = useLoginContext();

  const [profile, setProfile] = useState(null);

  const searchUser = async (id) => {   
    if (isAdmin) {
      try {
        const res = await getUserbyId(id);
        if (res.status === 200) {
          setProfile(res.data);
          return res;
        }
      } catch (error) {
        console.log('Sorry, profile not available');
        return error;
      }
    } else {
      try {
        const res = await ownUserRequest(id, user);
        if (res.status === 200) {
          setProfile(res.data);
          return res;
        }
      } catch (error) {
        console.log('Sorry, profile not available');
        return error;
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await deleteUserRequest(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const updateUser = async (user, id) => {
    function checkUser(user) {
      for (var eachProp in user) {
        if (user[eachProp] === '') {
          delete user[eachProp];
        }
      }
      return user;
    }
    const cleanUser = checkUser(user);
    if(isAdmin){
      try {
        const response = updateUserRequest(cleanUser, id);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
    else{
      try {
        const response = updateOwnUserRequest(cleanUser, id);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }

    }
    
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        searchUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
