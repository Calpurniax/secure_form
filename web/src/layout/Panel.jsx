import { useState, useEffect } from 'react';
import { getUsers } from '../services/profileEndpoints';
import FormNewUser from '../components/panelComponents/FormNewUser';
import GetProfile from '../components/panelComponents/GetProfile';
import AllUsers from '../components/panelComponents/AllUsers';

const Panel = () => {
  const [renderCreate, setRenderCreate] = useState(false);
  const [renderSearch, setRenderSearch] = useState(false);

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setAllUsers(response);     
    });
  }, []);

  const handleViews = (ev) => {
    const id = ev.target.id;
    if (id === 'create') {
      setRenderCreate(!renderCreate);
      setRenderSearch(false);
    } else {
      setRenderCreate(false);
      setRenderSearch(!renderSearch);
    }
  };

  const renderViews = () => {
    if (renderCreate) {
      return <FormNewUser />;
    } else if (renderSearch) {
      return <GetProfile />;      
    }
  };
  return (
    <>
      <section className='mt-12'>
        <ul onClick={handleViews} className='flex flex-row justify-around my-8'>
          <li className='hover:cursor-pointer bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 w-1/4 mb-6' id='create'>Create user</li>
          <li className='hover:cursor-pointer bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100 w-1/4 mb-6' id='search'>Search user for update</li>
        </ul>
        <section >{renderViews()}</section>
      </section>
      <section className='ml-5'>
        {<AllUsers allUsers={allUsers} setAllUsers={setAllUsers} />}
      </section>
    </>
  );
};
export default Panel;
