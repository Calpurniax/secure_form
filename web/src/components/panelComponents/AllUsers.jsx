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
            <ProfileArticle user={eachUser} />
            <ButtonFunctional
              id={eachUser._id}
              handleDelete={handleDelete}
              textValue={'Delete'}
            />
          </li>
        );
      });
    } else return <p>No hay usuarios</p>;
  };

  return (
    <>
      <h2>Users</h2>
      <ul>{renderUsers()}</ul>
    </>
  );
};
export default AllUsers;
