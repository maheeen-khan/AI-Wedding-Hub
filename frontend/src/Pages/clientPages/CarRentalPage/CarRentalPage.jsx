import React,{useState} from 'react'
import CateringCard from '../clientComponents/CateringCard.jsx';
import car1 from '../../../assets/car1.png';

import venueDivider from '../../../assets/venue-divider.png'

const recommendedCars = [
  {
    id: 1,
    name: "Royal Chariots",
    location: "DHA Phase 6, Karachi",
    capacity: "Luxury",
    price: "PKR 35,000+",
    starting: "PKR 35,000+",
    rating: "4.9",
    image: car1,
    events: ["Luxury", "12 Cars Available"]
  },
  {
    id: 2,
    name: "Classic Heritage",
    location: "Clifton, Karachi",
    capacity: "Vintage",
    price: "PKR 45,000+",
    starting: "PKR 45,000+",
    rating: "4.8",
    image: car1,
    events: ["Vintage", "5 Cars Available"]
  },
  {
    id: 3,
    name: "Elite SUV Rental",
    location: "PECHS, Karachi",
    capacity: "SUV",
    price: "PKR 25,000+",
    starting: "PKR 25,000+",
    rating: "4.7",
    image: car1,
    events: ["SUV", "8 Cars Available"]
  },
];

const allCars = [
  {
    id: 4,
    name: "Karachi Luxury Rides",
    location: "DHA, Karachi",
    capacity: "Luxury",
    price: "PKR 22,000+",
    starting: "PKR 22,000+",
    rating: "4.7",
    image: car1,
    events: ["Luxury", "12 Cars Available"]
  },
  {
    id: 5,
    name: "Vintage Dream Car",
    location: "Clifton, Karachi",
    capacity: "Vintage",
    price: "PKR 50,000+",
    starting: "PKR 50,000+",
    rating: "4.8",
    image: car1,
    events: ["Vintage", "12 Cars Available"]
  },
  {
    id: 6,
    name: "Safari Wedding Fleets",
    location: "KDA, Karachi",
    capacity: "Luxury",
    price: "PKR 28,000+",
    starting: "PKR 28,000+",
    rating: "4.7",
    image: car1,
    events: ["Luxury", "12 Cars Available"]
  },
  {
    id: 7,
    name: "The Groom's Limo",
    location: "Burns Road, Karachi",
    capacity: "Luxury",
    price: "PKR 65,000+",
    starting: "PKR 65,000+",
    rating: "4.8",
    image: car1,
    events: ["Limousine", "12 Cars Available"]
  },
  {
    id: 8,
    name: "White Rose Motors",
    location: "Gulshan, Karachi",
    capacity: "Luxury",
    price: "PKR 30,000+",
    starting: "PKR 30,000+",
    rating: "4.5",
    image: car1,
    events: ["Luxury", "12 Cars Available"]
  },
  {
    id: 9,
    name: "Classic Karachi Car Co.",
    location: "PECHS, Karachi",
    capacity: "Vintage",
    price: "PKR 42,000+",
    starting: "PKR 42,000+",
    rating: "4.6",
    image: car1,
    events: ["Vintage", "12 Cars Available"]
  },
  {
    id: 10,
    name: "Heritage SUV Rental",
    location: "Nazimabad, Karachi",
    capacity: "Luxury",
    price: "PKR 25,000+",
    starting: "PKR 25,000+",
    rating: "4.7",
    image: car1,
    events: ["SUV", "12 Cars Available"]
  },
  {
    id: 11,
    name: "Royal Wedding Wheels",
    location: "Malir, Karachi",
    capacity: "Luxury",
    price: "PKR 35,000+",
    starting: "PKR 35,000+",
    rating: "4.5",
    image: car1,
    events: ["Luxury", "12 Cars Available"]
  },
  {
    id: 12,
    name: "Majestic Motors",
    location: "Tariq Road, Karachi",
    capacity: "Luxury",
    price: "PKR 18,000+",
    starting: "PKR 18,000+",
    rating: "4.6",
    image: car1,
    events: ["Self Drive", "12 Cars Available"]
  },
  {
    id: 13,
    name: "Prestige Rentals",
    location: "Bahria Town, Karachi",
    capacity: "SUV",
    price: "PKR 27,000+",
    starting: "PKR 27,000+",
    rating: "4.7",
    image: car1,
    events: ["SUV", "12 Cars Available"]
  },
  {
    id: 14,
    name: "Imperial Wedding Cars",
    location: "North Nazimabad, Karachi",
    capacity: "Vintage",
    price: "PKR 55,000+",
    starting: "PKR 55,000+",
    rating: "4.9",
    image: car1,
    events: ["Vintage", "12 Cars Available"]
  },
  {
    id: 15,
    name: "Diamond Drive",
    location: "Shahrah-e-Faisal, Karachi",
    capacity: "Luxury",
    price: "PKR 32,000+",
    starting: "PKR 32,000+",
    rating: "4.8",
    image: car1,
    events: ["Premium", "12 Cars Available"]
  },
];

const ITEMS_PER_PAGE = 9;


const CarRentalPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
        const totalPages = Math.ceil(allCars.length / ITEMS_PER_PAGE);
        const paginatedCar = allCars.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

  return (
    <>
     <div className="container-xl py-4">
    
                        {/* ── Recommended Section ── */}
                        <div className="my-4">
                           
                           
                            <div className="row g-3">
                                {recommendedCars.map((car) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={car.id}>
                                        <CateringCard caterer={car} recommended={true} eventlabel={true} />
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
                            <h5 className="section-heading mb-4">All Car Rentals in Karachi</h5>
                            <div className="row g-3">
                                {paginatedCar.map((car) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={car.id}>
                                        <CateringCard caterer={car} recommended={false} events={true} />
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

export default CarRentalPage