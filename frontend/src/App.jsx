import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/clientPages/LandingPage/LandingPage'
import Login_Page from './Pages/Login_SignUp/Login_Page/Login_Page'
import SignUp_Page from './Pages/Login_SignUp/SignUp_Page/Signup_Page'
import VenuePage from './Pages/clientPages/VenuePage/VenuePage.jsx';
import Admin_Dashboard from './Pages/Admin/Admin_Dashboard/Admin_Dashboard.jsx'
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
        <Route path='/admin' element={<Admin_Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
