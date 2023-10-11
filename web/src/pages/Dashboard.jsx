import { useState, useEffect } from 'react';
import { useProfileContext } from '../context/ProfileContext';
import { getUsers } from '../services/profileEndpoints';
import Layout from '../components/layout/Layout';
import DashboardSelector from '../components/dashboardComponents/DashboardSelector';
import AllUsers from '../components/dashboardComponents/AllUsers';

const Dashboard = () => {
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
    if (response.status === 204) {
      setAllUsers(newArray);
    }
  };
  return (
    <Layout>
      <DashboardSelector setAllUsers={setAllUsers} allUsers={allUsers}/>
      <AllUsers allUsers={allUsers} handleDelete={handleDelete}/>
    </Layout>
  );
};

export default Dashboard;
