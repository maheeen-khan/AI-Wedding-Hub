import React,{useState} from 'react'
import CateringCard from '../clientComponents/CateringCard.jsx';
import decor1 from '../../../assets/decor1.png';
import decor2 from '../../../assets/decor2.png';
import decor3 from '../../../assets/decor3.png';
import decor4 from '../../../assets/decor4.png';
import decor5 from '../../../assets/decor5.png';
import decor6 from '../../../assets/decor6.png';

import venueDivider from '../../../assets/venue-divider.png'

const recommendedDecorators = [
  {
    id: 1,
    name: "Grand Events by Z&H",
    location: "DHA Phase 6, Karachi",
    price: "PKR 500K - 2M",
    starting: "PKR 500K - 2M",
    rating: "4.9",
    image: decor4,
    events: ["Royal", "Premium"]
  },
  {
    id: 2,
    name: "The Floral Studio",
    location: "Clifton, Karachi",
    price: "PKR 300K - 800K",
    starting: "PKR 300K - 800K",
    rating: "4.8",
    image: decor5,
    events: ["Minimalist", "Elegant"]
  },
  {
    id: 3,
    name: "Rang-e-Karachi",
    location: "Gulshan-e-Iqbal, Karachi",
    price: "PKR 200K - 500K",
    starting: "PKR 200K - 500K",
    rating: "4.7",
    image: decor6,
    events: ["Traditional", "Vibrant"]
  },
];

const allDecorators = [
  {
    id: 4,
    name: "Sanam Decor",
    location: "P.E.C.H.S, Karachi",
    price: "PKR 400K+",
    starting: "PKR 400K+",
    rating: "4.6",
    image: decor1,
    events: ["Wedding", "Stage Decor"]
  },
  {
    id: 5,
    name: "Karachi Krafts",
    location: "DHA Scheme 1, Karachi",
    price: "PKR 250K+",
    starting: "PKR 250K+",
    rating: "4.5",
    image: decor3,
    events: ["Rustic", "Valima"]
  },
  {
    id: 6,
    name: "The Wedding Co",
    location: "Zamzama, Karachi",
    price: "PKR 1M+",
    starting: "PKR 1M+",
    rating: "4.9",
    image: decor2,
    events: ["Luxury", "Wedding"]
  },
  {
    id: 7,
    name: "Mygul Art Decor",
    location: "North Nazimabad, Karachi",
    price: "PKR 350K+",
    starting: "PKR 350K+",
    rating: "4.4",
    image: decor1,
    events: ["Wedding", "Reception"]
  },
  {
    id: 8,
    name: "Petals & Pearls",
    location: "Defence, Karachi",
    price: "PKR 750K+",
    starting: "PKR 750K+",
    rating: "4.8",
    image: decor5,
    events: ["Floral", "Luxury"]
  },
  {
    id: 9,
    name: "Urban Events",
    location: "Bahria Town, Karachi",
    price: "PKR 500K+",
    starting: "PKR 500K+",
    rating: "4.6",
    image: decor3,
    events: ["Modern"]
  },
  {
    id: 10,
    name: "Zeenat Events",
    location: "FB Area, Karachi",
    price: "PKR 150K+",
    starting: "PKR 150K+",
    rating: "4.3",
    image: decor6,
    events: ["Traditional"]
  },
  {
    id: 11,
    name: "Elite Creations",
    location: "Karachi, Karachi",
    price: "PKR 2M+",
    starting: "PKR 2M+",
    rating: "5.0",
    image: decor2,
    events: ["Grand Wedding"]
  },
  {
    id: 12,
    name: "Desi Vibe Decor",
    location: "Garden West, Karachi",
    price: "PKR 100K+",
    starting: "PKR 100K+",
    rating: "4.2",
    image: decor1,
    events: ["Floral", "Mehndi"]
  },
  {
    id: 13,
    name: "Royal Touch Decor",
    location: "Clifton, Karachi",
    price: "PKR 600K+",
    starting: "PKR 600K+",
    rating: "4.7",
    image: decor4,
    events: ["Wedding", "Luxury"]
  },
  {
    id: 14,
    name: "Dreamscape Events",
    location: "Gulshan-e-Iqbal, Karachi",
    price: "PKR 450K+",
    starting: "PKR 450K+",
    rating: "4.6",
    image: decor3,
    events: ["Reception", "Valima"]
  },
  {
    id: 15,
    name: "Elegant Affairs",
    location: "DHA Phase 8, Karachi",
    price: "PKR 850K+",
    starting: "PKR 850K+",
    rating: "4.9",
    image: decor1,
    events: ["Luxury", "Wedding"]
  },
];

const ITEMS_PER_PAGE = 9;


const DecorPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(allDecorators.length / ITEMS_PER_PAGE);
        const paginatedDecorators = allDecorators.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

  return (
    <>
     <div className="container-xl py-4">
    
                        {/* ── Recommended Section ── */}
                        <div className="my-4">
                           
                           
                            <div className="row g-3">
                                {recommendedDecorators.map((decorator) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={decorator.id}>
                                        <CateringCard caterer={decorator} recommended={true} eventlabel={true} />
                                    </div>
                                ))}
                            </div>
                        </div>
    
                        {/* ── Divider ── */}
                        <div className="d-flex align-items-center justify-content-center my-5">
                            <img src={venueDivider} alt="Divider" className='img-fluid venue-divider' width={300}/>
                        </div>
    
                        {/* ── All Venues Section ── */}
                        <div>
                            <h5 className="section-heading mb-4">All Decorators in Karachi</h5>
                            <div className="row g-3">
                                {paginatedDecorators.map((decorator) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={decorator.id}>
                                        <CateringCard caterer={decorator} recommended={false} events={true} />
                                    </div>
                                ))}
                            </div>
                            
                            {/* ── Pagination ── */}
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-5 py-5">
                        <button
                            className="page-btn"
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <button
                                key={p}
                                className={`page-num ${currentPage === p ? "page-active" : ""}`}
                                onClick={() => setCurrentPage(p)}
                            >
                                {p}
                            </button>
                        ))}
                        <button
                            className="page-btn"
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                             </div>

                                {/* Floating action button */}
      <button type="button" className="ww-fab" aria-label="AI Assistant" title='Need Wedding Ideas? Ask AI'>
        <i className="bi bi-stars"></i>
      </button>
                            </div>
    </>
  )
}

export default DecorPage