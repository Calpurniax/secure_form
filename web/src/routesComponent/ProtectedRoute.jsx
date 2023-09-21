import { useLoginContext } from '../context/LogInContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isLoggedIn, loading} = useLoginContext();
    if(loading) return <p>Loading...</p>
    if (!loading && !isLoggedIn) return <Navigate to='/login' replace />
    return <Outlet />
}
export default ProtectedRoute