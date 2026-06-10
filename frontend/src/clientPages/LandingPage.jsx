import React from 'react'
import Navbar from './clientComponents/Navbar'
import "./styleSheet.css"
const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div className='landing-page d-flex flex-column align-items-center justify-content-center text-center text-white pt-5' style={{height: '100vh'}}>
      <h1 style={{fontFamily:'serif'}} className='fw-bold'>Your Dream Shadi,  <br /> <span style={{color:'#FFE088'}}>Planned Intelligently.</span></h1>
      <h5 className='fst-italic fw-normal'>From venue to valima — plan everything in one place.</h5>

      <div className="d-flex gap-3 mt-3">
      <button className='btn px-lg-5 py-3 start-planning-btn' style={{backgroundColor:'#D4AF37',color:'#610000'}}>Start Planning</button>
      <button className='btn btn-outline-light px-lg-5 py-3'>View Demo</button>
      </div>
    </div>
    </>
  )
}

export default LandingPage