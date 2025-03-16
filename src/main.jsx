import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Signup from './pages/authentication/Signup.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Signin from './pages/authentication/Signin.jsx';
import Footer from './components/Footer';


const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='dashboard' element={<Dashboard />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='signin' element={<Signin />}></Route>
      <Route path='footer' element={<Footer />}></Route>
    </Routes>
  </BrowserRouter>
)
