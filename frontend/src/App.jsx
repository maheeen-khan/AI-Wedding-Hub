import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/clientPages/LandingPage/LandingPage'
import Login_Page from './Pages/Login_SignUp/Login_Page/Login_Page'
import SignUp_Page from './Pages/Login_SignUp/SignUp_Page/Signup_Page'
import VenuePage from './Pages/clientPages/VenuePage/VenuePage.jsx';
import Layout from './Pages/Admin/Admin_Layout/Admin_Layout.jsx'
import Admin_Dashboard from './Pages/Admin/Admin_Dashboard/Admin_Dashboard.jsx'
import Manage_Vendors from './Pages/Admin/Manage_Vendors/Manage_Vendors.jsx'
import Manage_Users from './Pages/Admin/Manage_Users/Manage_Users.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login_Page />} />
        <Route path="/sign-up" element={<SignUp_Page/>} />
        <Route path='/landingpage' element={<LandingPage/>}/>
        <Route path='/venue' element={<VenuePage/>}/>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Admin_Dashboard />} />
          <Route path="dashboard" element={<Admin_Dashboard />} />
          <Route path="vendors" element={<Manage_Vendors />} />
          <Route path="users" element={<Manage_Users/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
