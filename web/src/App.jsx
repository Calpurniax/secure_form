import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./layout/Login";
import ContactForm from './layout/ContactForm';
import Header from './components/Header';
import Panel from './layout/Panel';
import Messages from './layout/Messages';
import Logout from './layout/Logout'
import UserProfile from './components/userProfile';
import './App.css'
import { LogInProvider } from './context/LogInContext';
import { ProfileProvider } from './context/ProfileContext';
import ProtectedRoute from './routesComponent/ProtectedRoute';
import AdminRoute from './routesComponent/AdminRoute';
import FormUpdateUser from './components/panelComponents/FormUpdateUser';

function App() {

  return (
    <LogInProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/logout' element={<Logout />} />
              <Route path='/messages' element={<Messages />} />
              <Route path='/profile/:id' element={<UserProfile/>}/>
              <Route element={<AdminRoute />}>
                <Route path='/panel' element={<Panel />} />
                <Route path='/panel/:id' element={<FormUpdateUser />} />                
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </LogInProvider>
  )
}

export default App
