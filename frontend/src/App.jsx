import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/clientPages/LandingPage/LandingPage'
import Login_Page from './Pages/Login_SignUp/Login_Page/Login_Page'
import SignUp_Page from './Pages/Login_SignUp/SignUp_Page/Signup_Page'
import VenuePage from './Pages/clientPages/VenuePage/VenuePage.jsx';
import Admin_Dashboard from './Pages/Admin/Admin_Dashboard/Admin_Dashboard.jsx'
import CateringPage from './Pages/clientPages/CateringPage/CateringPage.jsx';
import PhotographyPage from './Pages/clientPages/PhotographyPage/PhotographyPage.jsx';
import BasePage from './Pages/clientPages/BasePage/BasePage.jsx';
import PhotographChild from './Pages/clientPages/PhotographyPage/PhotographyPage.jsx';
import DecorPage from './Pages/clientPages/DecorPage/DecorPage.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<Login_Page />} />
        <Route path="/sign-up" element={<SignUp_Page/>} />
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin' element={<Admin_Dashboard/>}/>

        <Route path='/venue'  element={<BasePage mainheading={'Wedding Venues in Karachi'} subhead={'Showing venues matching your budget and guest count.'}><VenuePage/></BasePage>}/>

        <Route path='/catering' element={<BasePage mainheading={'Catering Services in Karachi'} subhead={'Showing caterers matching your budget and guest count. From traditional Biryanis to gourmet fusion cuisines.'}><CateringPage/></BasePage>}/>

        <Route path='/photography' element={<BasePage mainheading={'Wedding Photographers in Karachi'} subhead={'Capturing heritage, joy, and the timeless elegance of your celebrations with the finest photography talent in the city.'}><PhotographyPage/></BasePage>}/>

        <Route path='/decor' element={<BasePage mainheading={'Wedding Decor in Karachi'} subhead={"Discover the most exquisite stage setups, floral arrangements, and thematic designs from Karachi's top-tier wedding decorators, tailored to your unique cultural heritage."}><DecorPage/></BasePage>}/>

        <Route path='/base' element={<BasePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
