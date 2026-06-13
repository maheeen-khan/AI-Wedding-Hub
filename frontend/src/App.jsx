import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/clientPages/LandingPage'
import Login_Page from './Pages/Login_SignUp/Login_Page/Login_Page'
import SignUp_Page from './Pages/Login_SignUp/SignUp_Page/Signup_Page'
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
