import ButtonFunctional from '../ButtonFunctional';
import { useProfileContext } from '../../context/ProfileContext';
import ProfileArticle from '../ProfileArticle';

const AllUsers = ({ allUsers, setAllUsers }) => {
  const { deleteUser } = useProfileContext();

  const handleDelete = (id) => {
    const newArray = allUsers.filter((each) => each._id !== id);
    deleteUser(id);
    setAllUsers(newArray);
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
