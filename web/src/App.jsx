import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./layout/Login"
import Register from './layout/Register';
import ContactForm from './layout/ContactForm';
import Header from './components/Header';
import './App.css'
import { LogInProvider } from './context/LogInContext';

function App() {

  return (
    <LogInProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<ContactForm/>} />
          <Route path='/messages' element={<h1>Messages</h1>} />
        </Routes>
      </BrowserRouter>
    </LogInProvider>
  )
}

export default App
