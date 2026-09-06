import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import Login from './page/login.jsx';
import Signup from './page/signup.jsx';
import { Route , Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </MantineProvider>
)
