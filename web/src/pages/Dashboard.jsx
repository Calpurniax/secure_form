import Layout from '../components/layout/Layout';
import DashboardSelector from '../components/dashboardComponents/DashboardSelector';
import AllUsers from '../components/dashboardComponents/AllUsers';

const Dashboard = () => {
  return (
    <Layout>
      <DashboardSelector />
      <AllUsers />
    </Layout>
  );
};

export default Dashboard;
