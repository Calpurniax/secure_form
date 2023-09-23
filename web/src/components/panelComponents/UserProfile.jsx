import { useEffect, useState } from 'react';
import { useProfileContext } from '../../context/ProfileContext';

const UserProfile = () => {
  const { profile, setProfile, deleteUser } = useProfileContext();
  const [renderProfile, setRenderProfile] = useState(false);

  const handleClick = (ev) => {
    if (ev.target.id === 'delete') {
      deleteUser(profile._id);
      setRenderProfile(false);
      setProfile(null)
    }
  };
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
            <button id='edit'>Editar</button>
            <button id='delete'>Borrar</button>
          </div>
        </article>
      ) : (
        <p>No hay usuario que mostrar</p>
      )}
    </div>
  );
};
export default UserProfile;
