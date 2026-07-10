import React,{useState} from 'react'
import Navbar from '../clientComponents/Navbar2';
import Footer from '../clientComponents/Footer';
import venueDivider from '../../../assets/venue-divider.png'


const BasePage = ({mainheading,subhead,children}) => {

   

    return (
        <>
            <Navbar />

            <div className="venues-page" style={{marginTop:'60px'}}>

                {/* ── Hero Banner ── */}
                <div className="venues-hero">
                    <h1 className="hero-title">{mainheading}</h1>
                    <p className="hero-sub">{subhead}</p>
                </div>

                <div className="container-xl py-4">

                    {/* ── Recommended Section ── */}
                    <div className="my-4">
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <span className="recommended-star">&#9733;</span>
                            <h4 className="section-heading mb-0">Recommended for You</h4>
                        </div>
                        <p className="section-sub mb-1 ps-2">Based on your wedding profile and preferences</p>
                        <div className="row g-3">
                                           {children}

                        </div>
                    </div>
                    

                    
                </div>


            </div>


            <Footer />
        </>
    )
}

export default BasePage