import { useLoginContext } from '../context/LogInContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const { isAdmin, isLoggedIn } = useLoginContext();

    if (!isAdmin, !isLoggedIn) return <Navigate to='/login' replace />
    if (isAdmin) return <Outlet />
    if (isLoggedIn) return <Navigate to='/messages' replace />

}
export default AdminRoute