import React,{useState} from 'react'
import Navbar2 from '../clientComponents/Navbar2.jsx';
import VenueCard from '../clientComponents/VenueCard.jsx';
import banquet1 from '../../../assets/banquet1.png';
import banquet2 from '../../../assets/banquet2.png';
import banquet3 from '../../../assets/banquet3.png';
import venueDivider from '../../../assets/venue-divider.png';
import banquet4 from '../../../assets/banquet4.png';
import './VenuePage.css';

const recommendedVenues = [
  {
    id: 1,
    name: "The Grand Regency",
    location: "1 DHA Phase II",
    capacity: "500-1000",
    price: "PKR 3,500/head",
    starting: "PKR 3,500/head",
    rating: "4.5",
    image: banquet1,
  },
  {
    id: 2,
    name: "Royal Marquee",
    location: "2 Gulshan-e-Iqbal",
    capacity: "300-600",
    price: "PKR 2,800/head",
    starting: "PKR 2,800/head",
    rating: "4.7",
    image: banquet2,
  },
  {
    id: 3,
    name: "Pearl Continental Ballroom",
    location: "Club Road",
    capacity: "400-800",
    price: "PKR 4,500/head",
    starting: "PKR 4,500/head",
    rating: "4.8",
    image: banquet3,
  },
];

const allVenues = [
  {
    id: 4,
    name: "Seaside Gardens",
    location: "Clifton",
    capacity: "300-600",
    price: "PKR 2,000",
    starting: "PKR 2,000",
    rating: "4.5",
    image: banquet4,
  },
  {
    id: 5,
    name: "Dynasty Banquet",
    location: "Gulistan-e-Johar",
    capacity: "600-300",
    price: "PKR 1,500",
    starting: "PKR 1,500",
    rating: "4.4",
    image: banquet1,
  },
  {
    id: 6,
    name: "Palazzo Event Center",
    location: "Shahrae Faisal",
    capacity: "400-1000",
    price: "PKR 3,000",
    starting: "PKR 1,000",
    rating: "4.9",
    image: banquet2,
  },
  {
    id: 7,
    name: "Floral Oasis",
    location: "Clifton",
    capacity: "200-500",
    price: "PKR 2,500",
    starting: "PKR 2,500",
    rating: "4.4",
    image: banquet3,
  },
  {
    id: 8,
    name: "Crystal Hall",
    location: "Nazimabad",
    capacity: "300-700",
    price: "PKR 2,300",
    starting: "PKR 2,300",
    rating: "4.2",
    image: banquet4,
  },
  {
    id: 9,
    name: "Regal Palms",
    location: "Tariq Road",
    capacity: "400-900",
    price: "PKR 3,000",
    starting: "PKR 3,000",
    rating: "4.7",
    image: banquet1,
  },
  {
    id: 10,
    name: "Golden Jubilee",
    location: "Soldier Cantt",
    capacity: "500-1000",
    price: "PKR 3,800",
    starting: "PKR 3,800",
    rating: "4.3",
    image: banquet4,
  },
  {
    id: 11,
    name: "Metropolitan Marquee",
    location: "North Nazimabad",
    capacity: "300-1000",
    price: "PKR 2,700",
    starting: "PKR 2,700",
    rating: "4.5",
    image: banquet1,
  },
  {
    id: 12,
    name: "Infinity Lawn",
    location: "Bahria Town",
    capacity: "400-800",
    price: "PKR 3,100",
    starting: "PKR 3,100",
    rating: "4.8",
    image: banquet2,
  },
  
  {
    id: 13,
    name: "Infinity Lawn",
    location: "Bahria Town",
    capacity: "400-800",
    price: "PKR 3,100",
    starting: "PKR 3,100",
    rating: "4.8",
    image: banquet1,
  },
   {
    id: 14,
    name: "Metropolitan Marquee",
    location: "North Nazimabad",
    capacity: "300-1000",
    price: "PKR 2,700",
    starting: "PKR 2,700",
    rating: "4.5",
    image: banquet3,
  },
   {
    id: 15,
    name: "Metropolitan Marquee",
    location: "North Nazimabad",
    capacity: "300-1000",
    price: "PKR 2,700",
    starting: "PKR 2,700",
    rating: "4.5",
    image: banquet2,
  },
];

const ITEMS_PER_PAGE = 9;


const VenuePage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allVenues.length / ITEMS_PER_PAGE);
  const paginatedVenues = allVenues.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar2 />

       <div className="venues-page">
 
      {/* ── Hero Banner ── */}
      <div className="venues-hero">
        <h1 className="hero-title">Wedding Venues in Karachi</h1>
        <p className="hero-sub">Showing venues matching your budget and guest count.</p>
      </div>
 
      <div className="container-xl py-4">
 
        {/* ── Recommended Section ── */}
        <div className="my-5">
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="recommended-star">&#9733;</span>
            <h4 className="section-heading mb-0">Recommended for You</h4>
          </div>
          <p className="section-sub mb-4 ps-2">Based on your wedding profile</p>
          <div className="row g-3">
            {recommendedVenues.map((venue) => (
              <div className="col-12 col-md-6 col-lg-4" key={venue.id}>
                <VenueCard venue={venue} recommended={true} />
              </div>
            ))}
          </div>
        </div>
 
        {/* ── Divider ── */}
        <div className="d-flex align-items-center justify-content-center my-5">
          <img src={venueDivider} alt="Divider"/>
        </div>
 
        {/* ── All Venues Section ── */}
        <div>
          <h5 className="section-heading mb-4">All Venues in Karachi</h5>
          <div className="row g-3">
            {paginatedVenues.map((venue) => (
              <div className="col-12 col-sm-6 col-lg-4" key={venue.id}>
                <VenueCard venue={venue} recommended={false} />
              </div>
            ))}
          </div>
 
          {/* ── Pagination ── */}
          <div className="d-flex justify-content-center align-items-center gap-2 mt-5 pt-5">
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
    </div>
  
    </>
  )
}

export default VenuePage