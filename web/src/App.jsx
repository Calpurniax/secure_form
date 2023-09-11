import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./layout/Login"
import Register from './layout/Register';
import './App.css'
import { LogInProvider } from './context/LogInContext';

function App() {

  return (
    <LogInProvider>
      <BrowserRouter>
        <p>app</p>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/messages' element={<h1>Messages</h1>} />
        </Routes>
      </BrowserRouter>
    </LogInProvider>
  )
}

export default App
