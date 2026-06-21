import React,{useState} from 'react'
import CateringCard from '../clientComponents/CateringCard.jsx';
import catering1 from '../../../assets/catering1.png';
import catering2 from '../../../assets/catering2.png';
import catering3 from '../../../assets/catering3.png';
import venueDivider from '../../../assets/venue-divider.png';
import banquet4 from '../../../assets/banquet4.png';
// import './VenuePage.css';

const recommendedCaterers = [
  {
    id: 1,
    name: "Shahi Dastarkhwan",
    location: "Clifton",
    starting: "PKR 2,800",
    rating: "4.9",
    image: catering1,
  },
  {
    id: 2,
    name: "Silver Spoon Events",
    location: "DHA Phase 6",
    starting: "PKR 3,500",
    rating: "4.8",
    image: catering2,
  },
  {
    id: 3,
    name: "Fusion Feast",
    location: "PECHS",
    starting: "PKR 2,200",
    rating: "4.7",
    image: catering3,
  },
];

const allCaterers = [
  {
    id: 4,
    name: "Flavors of Karachi",
    location: "Garden East",
    starting: "PKR 1,800",
    rating: "4.6",
    image: catering1,
  },
  {
    id: 5,
    name: "Royal Bites",
    location: "North Nazimabad",
    starting: "PKR 2,400",
    rating: "4.7",
    image: catering2,
  },
  {
    id: 6,
    name: "Mezban Catering",
    location: "Gulshan-e-Iqbal",
    starting: "PKR 1,500",
    rating: "4.5",
    image: catering3,
  },
  {
    id: 7,
    name: "Desi Delights",
    location: "Malir",
    starting: "PKR 2,100",
    rating: "4.4",
    image: catering1,
  },
  {
    id: 8,
    name: "Tandoori Traditions",
    location: "Bahadurabad",
    starting: "PKR 2,000",
    rating: "4.6",
    image: catering2,
  },
  {
    id: 9,
    name: "The Elite Caterer",
    location: "DHA Phase 8",
    starting: "PKR 4,000",
    rating: "4.9",
    image: catering3,
  },
  {
    id: 10,
    name: "Karachi Kitchen",
    location: "PECHS",
    starting: "PKR 1,700",
    rating: "4.5",
    image: catering1,
  },
  {
    id: 11,
    name: "Grand Feast",
    location: "Clifton",
    starting: "PKR 2,800",
    rating: "4.8",
    image: catering2,
  },
  {
    id: 12,
    name: "Taste Junction",
    location: "Nazimabad",
    starting: "PKR 1,900",
    rating: "4.4",
    image: catering3,
  },
  {
  id: 13,
  name: "Food Fusion",
  location: "Clifton",
  starting: "PKR 2,200",
  rating: "4.6",
  image: catering1,
},
{
  id: 14,
  name: "BBQ Palace",
  location: "DHA",
  starting: "PKR 2,700",
  rating: "4.7",
  image: catering2,
},
{
  id: 15,
  name: "Royal Caterers",
  location: "Malir",
  starting: "PKR 2,100",
  rating: "4.5",
  image: catering3,
},
];

const ITEMS_PER_PAGE = 9;


const CateringPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCaterers.length / ITEMS_PER_PAGE);
  const paginatedCaterers = allCaterers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>

       <div className="venues-page">
 
      
 
      <div className="container-xl py-4">
 
        {/* ── Recommended Section ── */}
        <div className="my-2">
          
         
          <div className="row g-3">
            {recommendedCaterers.map((caterer) => (
              <div className="col-12 col-md-6 col-lg-4" key={caterer.id}>
                <CateringCard caterer={caterer} recommended={true} />
              </div>
            ))}
          </div>
        </div>
 
        {/* ── Divider ── */}
        <div className="d-flex align-items-center justify-content-center my-5">
          <img src={venueDivider} alt="Divider" className="img-fluid" />
        </div>
 
        {/* ── All Venues Section ── */}
        <div>
          <h5 className="section-heading mb-4">All Caterers in Karachi</h5>
          <div className="row g-3">
            {paginatedCaterers.map((caterer) => (
              <div className="col-12 col-sm-6 col-lg-4" key={caterer.id}>
                <CateringCard caterer={caterer} recommended={false} />
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
    </div>
    </>
  )
}

export default CateringPage