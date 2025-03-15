import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './pages/authentication/Signup.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='dashboard' element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
)
