import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { LogInProvider } from './context/LogInContext';
import { ProfileProvider } from './context/ProfileContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Messages from './pages/Messages';
import EditProfileUser from './pages/EditProfileUser';
import Dashboard from './pages/Dashboard';
import EditProfileAdmin from './pages/EditProfileAdmin'
import ProtectedRoute from './routesComponent/ProtectedRoute';
import AdminRoute from './routesComponent/AdminRoute';



function App() {

  return (
    <LogInProvider>
      <ProfileProvider>
        <BrowserRouter>       
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />               
                <Route element={<ProtectedRoute />}>
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/messages' element={<Messages />} />
                  <Route path='/profile/:id' element={<EditProfileUser/>}/>
                  <Route element={<AdminRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/:id' element={<EditProfileAdmin />} />
                  </Route>
                </Route>
              </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </LogInProvider>
  )
}

export default App
