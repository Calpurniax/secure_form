import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileContext } from '../../context/ProfileContext';

const UserProfile = () => {
  const { profile, setProfile, deleteUser } = useProfileContext();
  const [renderProfile, setRenderProfile] = useState(false);
  const navigate = useNavigate();

  const handleClick = (ev) => {
    if (ev.target.id === 'delete') {
      deleteUser(profile._id);
      setRenderProfile(false);
      setProfile(null)
    } else if (ev.target.id === "update") navigate(`/panel/${profile._id}`)
  }
  useEffect(() => {
    if (profile !== null) {
      setRenderProfile(true);
    }
  }, [profile]);
  return (
    <div>
      <h2>Perfil de usuario</h2>
      {renderProfile ? (
        <article>
          <h3>User: {profile.username}</h3>
          <p>Email: {profile.email}</p>
          <p>Id: {profile._id}</p>
          <p>Role: {profile.role}</p>
          {profile.lastname && <p>Last Name: {profile.lastname}</p>}
          {profile.name && <p>Name: {profile.name}</p>}
          <div onClick={handleClick}>
            <button id='delete'>Delete</button>
            <button id='update'>update</button>
          </div>
        </article>
      ) : (
        <p>No hay usuario que mostrar</p>
      )
      }
    </div >
  );
}
export default UserProfile
