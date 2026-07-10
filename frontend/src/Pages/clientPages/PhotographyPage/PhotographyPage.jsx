import React,{useState} from 'react'
import CateringCard from '../clientComponents/CateringCard.jsx';
import photograph1 from '../../../assets/photograph1.png';
import photograph2 from '../../../assets/photograph2.png';
import photograph3 from '../../../assets/photograph3.png';
import venueDivider from '../../../assets/venue-divider.png'
const recommendedPhotographers = [
    {
        id: 1,
        name: "Lumina Heritage Studio",
        location: "Clifton, Karachi",
        price: "PKR 150,000",
        starting: "PKR 150,000",
        rating: "4.9",
        image: photograph1,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 2,
        name: "Saffron Frames",
        location: "DHA Phase 6, Karachi",
        price: "PKR 125,000",
        starting: "PKR 125,000",
        rating: "4.8",
        image: photograph2,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 3,
        name: "Velvet Shadows",
        location: "Gulshan, Karachi",
        price: "PKR 180,000",
        starting: "PKR 180,000",
        rating: "4.9",
        image: photograph3,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
];

const allPhotographers = [
    {
        id: 4,
        name: "Cinematic Souls",
        location: "North Nazimabad, Karachi",
        price: "PKR 110,000",
        starting: "PKR 110,000",
        rating: "4.7",
        image: photograph1,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 5,
        name: "Eternal Moments",
        location: "Bahria Town, Karachi",
        price: "PKR 140,000",
        starting: "PKR 140,000",
        rating: "4.6",
        image: photograph3,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 6,
        name: "Golden Hour Films",
        location: "DHA Phase 5, Karachi",
        price: "PKR 165,000",
        starting: "PKR 165,000",
        rating: "4.5",
        image: photograph2,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 7,
        name: "Traditional Lens",
        location: "Clifton, Karachi",
        price: "PKR 95,000",
        starting: "PKR 95,000",
        rating: "4.9",
        image: photograph1,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 8,
        name: "Royal Frames",
        location: "PECHS, Karachi",
        price: "PKR 200,000",
        starting: "PKR 200,000",
        rating: "4.8",
        image: photograph2,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 9,
        name: "Modern Nikah",
        location: "Garden, Karachi",
        price: "PKR 130,000",
        starting: "PKR 130,000",
        rating: "4.8",
        image: photograph3,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 10,
        name: "Vibrant Vibes",
        location: "DHA, Karachi",
        price: "PKR 115,000",
        starting: "PKR 115,000",
        rating: "4.7",
        image: photograph2,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 11,
        name: "The Wedding Story",
        location: "Malir, Karachi",
        price: "PKR 175,000",
        starting: "PKR 175,000",
        rating: "4.9",
        image: photograph3,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 12,
        name: "Karachi Shoots",
        location: "Surjani, Karachi",
        price: "PKR 85,000",
        starting: "PKR 85,000",
        rating: "4.5",
        image: photograph1,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 13,
        name: "Dream Capture Studio",
        location: "Gulistan-e-Johar",
        price: "PKR 120,000",
        starting: "PKR 120,000",
        rating: "4.6",
        image: photograph3,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 14,
        name: "Signature Clicks",
        location: "Nazimabad",
        price: "PKR 145,000",
        starting: "PKR 145,000",
        rating: "4.7",
        image: photograph1,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
    {
        id: 15,
        name: "Timeless Memories",
        location: "Shahrah-e-Faisal",
        price: "PKR 190,000",
        starting: "PKR 190,000",
        rating: "4.8",
        image: photograph2,
        events: ["Wedding", "Engagement", "Pre-Wedding"]
    },
];

const ITEMS_PER_PAGE = 9;


const PhotographyPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(allPhotographers.length / ITEMS_PER_PAGE);
        const paginatedPhotographers = allPhotographers.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

  return (
    <>
     <div className="container-xl py-4">
    
                        {/* ── Recommended Section ── */}
                        <div className="my-4">
                           
                           
                            <div className="row g-3">
                                {recommendedPhotographers.map((photographer) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={photographer.id}>
                                        <CateringCard caterer={photographer} recommended={true} eventlabel={true} type="photography" />
                                    </div>
                                ))}
                            </div>
                        </div>
    
                        {/* ── Divider ── */}
                        <div className="d-flex align-items-center justify-content-center my-5">
                            <img src={venueDivider} alt="Divider" className='img-fluid venue-divider' width={300} />
                        </div>
    
                        {/* ── All Venues Section ── */}
                        <div>
                            <h5 className="section-heading mb-4">All Venues in Karachi</h5>
                            <div className="row g-3">
                                {paginatedPhotographers.map((photographer) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={photographer.id}>
                                        <CateringCard caterer={photographer} recommended={false} events={true} />
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

export default PhotographyPage