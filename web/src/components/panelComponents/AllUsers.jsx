import ProfileArticle from '../ProfileArticle';
import { getUsers } from '../../services/profileEndpoints';
import { useState, useEffect } from 'react';
import { useProfileContext } from '../../context/ProfileContext';

const AllUsers = () => {  
   
  const [allUsers, setAllUsers] = useState([]);
  const { deleteUser } = useProfileContext();

  useEffect(() => {
    getUsers().then((response) => {
      setAllUsers(response);     
    });
  }, []);

  const handleDelete = async (id) => {
    const newArray = allUsers.filter((each) => each._id !== id);
    const response = await deleteUser(id);
    if (response.status === 200) {
      setAllUsers(newArray);
    }
  };

  const renderUsers = () => {
    if (allUsers.length > 0) {
      return allUsers.map((eachUser) => {
        return (
          <li key={eachUser.id}>
            <ProfileArticle user={eachUser} handleDelete={handleDelete} />
          </li>
        );
      });
    } else return <p>No hay usuarios</p>;
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='my-6 text-2xl'>Users</h2>
      <div className='w-11/12'>
        <ul className='flex justify-start flex-wrap gap-6'>{renderUsers()}</ul>
      </div>
    </div>
  );
};
export default AllUsers;
