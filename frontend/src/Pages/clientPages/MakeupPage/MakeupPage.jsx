import React,{useState} from 'react'
import CateringCard from '../clientComponents/CateringCard.jsx';
import makeup1 from '../../../assets/makeup1.png';
import makeup2 from '../../../assets/makeup2.png';
import makeup3 from '../../../assets/makeup3.png';

import venueDivider from '../../../assets/venue-divider.png'

const recommendedMakeupArtists = [
  {
    id: 1,
    name: "Natasha Salon",
    location: "DHA Phase 6 • Salon",
    price: "PKR 45,000",
    starting: "PKR 45,000",
    rating: "4.9",
    image: makeup1,
  },
  {
    id: 2,
    name: "Para Ali Makeup",
    location: "Gulshan • Salon",
    price: "PKR 35,000",
    starting: "PKR 35,000",
    rating: "4.8",
    image: makeup2,
  },
  {
    id: 3,
    name: "Mona J Salon",
    location: "Clifton • Salon",
    price: "PKR 40,000",
    starting: "PKR 40,000",
    rating: "4.3",
    image: makeup3,
  },
];

const allMakeupArtists = [
  {
    id: 4,
    name: "Nabila Salon",
    location: "Clifton • Salon",
    price: "PKR 65,000",
    starting: "PKR 65,000",
    rating: "4.9",
    image: makeup3,
  },
  {
    id: 5,
    name: "Faiza's Salon",
    location: "PECHS • Salon",
    price: "PKR 30,000",
    starting: "PKR 30,000",
    rating: "4.6",
    image: makeup2,
  },
  {
    id: 6,
    name: "Uzma Khan",
    location: "North Nazimabad • Freelance",
    price: "PKR 25,000",
    starting: "PKR 25,000",
    rating: "4.8",
    image: makeup1,
  },
  {
    id: 7,
    name: "The Makeup Studio",
    location: "DHA Phase 2 • Salon",
    price: "PKR 32,000",
    starting: "PKR 32,000",
    rating: "4.5",
    image: makeup1,
  },
  {
    id: 8,
    name: "Rose Beauty Parlor",
    location: "Gulistan-e-Johar • Salon",
    price: "PKR 22,000",
    starting: "PKR 22,000",
    rating: "4.4",
    image: makeup2,
  },
  {
    id: 9,
    name: "Glamour Hub",
    location: "Bahadurabad • Freelance",
    price: "PKR 28,000",
    starting: "PKR 28,000",
    rating: "4.7",
    image: makeup3,
  },
  {
    id: 10,
    name: "Elegant Touch",
    location: "DHA • Salon",
    price: "PKR 38,000",
    starting: "PKR 38,000",
    rating: "4.6",
    image: makeup1,
  },
  {
    id: 11,
    name: "Beauty Lounge",
    location: "Clifton • Salon",
    price: "PKR 26,000",
    starting: "PKR 26,000",
    rating: "4.5",
    image: makeup2,
  },
  {
    id: 12,
    name: "Noor Makeup Studio",
    location: "Gulshan • Salon",
    price: "PKR 34,000",
    starting: "PKR 34,000",
    rating: "4.8",
    image: makeup3,
  },
  {
    id: 13,
    name: "Makeover By Sana",
    location: "Malir • Freelance",
    price: "PKR 20,000",
    starting: "PKR 20,000",
    rating: "4.4",
    image: makeup2,
  },
  {
    id: 14,
    name: "Radiance Studio",
    location: "PECHS • Salon",
    price: "PKR 42,000",
    starting: "PKR 42,000",
    rating: "4.7",
    image: makeup1,
  },
  {
    id: 15,
    name: "Blush & Glow",
    location: "Bahria Town • Salon",
    price: "PKR 24,000",
    starting: "PKR 24,000",
    rating: "4.5",
    image: makeup3,
  },
];

const ITEMS_PER_PAGE = 9;


const MakeupPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(allMakeupArtists.length / ITEMS_PER_PAGE);
        const paginatedMakeupArtist = allMakeupArtists.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

  return (
    <>
     <div className="container-xl py-4">
    
                        {/* ── Recommended Section ── */}
                        <div className="my-4">
                           
                           
                            <div className="row g-3">
                                {recommendedMakeupArtists.map((decorator) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={decorator.id}>
                                        <CateringCard caterer={decorator} recommended={true} eventlabel={false} />
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
                            <h5 className="section-heading mb-4">All Makeup Artists in Karachi</h5>
                            <div className="row g-3">
                                {paginatedMakeupArtist.map((artist) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={artist.id}>
                                        <CateringCard caterer={artist} recommended={false} events={false} />
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
                            </div>
    </>
  )
}

export default MakeupPage