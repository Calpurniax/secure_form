import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./layout/Login";
import ContactForm from './layout/ContactForm';
import Header from './components/Header';
import Panel from './layout/Panel';
import Messages from './layout/Messages';
import Logout from './layout/Logout'
import EditProfile from './layout/EditProfile';
import './App.css'
import { LogInProvider } from './context/LogInContext';
import { ProfileProvider } from './context/ProfileContext';
import ProtectedRoute from './routesComponent/ProtectedRoute';
import AdminRoute from './routesComponent/AdminRoute';
import FormUpdateUser from './components/FormUpdateUser';

function App() {

  return (

    <LogInProvider>
      <ProfileProvider>
        <BrowserRouter>
          
            <Header />
            <main>
              <Routes>
                <Route path='/' element={<ContactForm />} />
                <Route path='/login' element={<Login />} />               
                <Route element={<ProtectedRoute />}>
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/messages' element={<Messages />} />
                  <Route path='/profile/:id' element={<EditProfile/>}/>
                  <Route element={<AdminRoute />}>
                    <Route path='/panel' element={<Panel />} />
                    <Route path='/panel/:id' element={<FormUpdateUser />} />
                  </Route>
                </Route>
              </Routes>
            </main>
         
        </BrowserRouter>
      </ProfileProvider>
    </LogInProvider>
  )
}

export default App
