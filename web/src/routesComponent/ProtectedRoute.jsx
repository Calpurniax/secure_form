import { useLoginContext } from '../context/LogInContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isLoggedIn } = useLoginContext();
    if (!isLoggedIn) return <Navigate to='/login' replace />
    return <Outlet />
}
export default ProtectedRoute