import React, { useState } from "react"; import { useNavigate } from "react-router-dom"; import { Calendar, Users2, MessageCircle, ShieldCheck, CalendarCheck, } from "lucide-react"; import "./BookingSidebar.css";


export default function BookingSidebar() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ eventType: "", eventDate: "", guestCount: "", notes: "", });

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value, }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", values);
    navigate("/booking-confirmation");
  };

  return (
    <aside className="vp-booking">
      {/* Price */}
      <div className="vp-booking__price-block"> <p className="vp-booking__price-label"> Starting from </p> <p className="vp-booking__price-value"> PKR 500 / guest </p> </div>

      {/* Booking Form */}

      <form onSubmit={handleSubmit} className="vp-booking__form" >

        {/* Event Type */}

        <div className="vp-booking__field"> <label>Event Type</label> <div className="vp-booking__select-wrap"> <select value={values.eventType} onChange={(e) => setValue("eventType", e.target.value)} required > <option value=""> Select event type </option> <option value="Mehndi"> Mehndi </option> <option value="Barat"> Barat </option> <option value="Walima"> Walima </option> </select> </div> </div>

        {/* Event Date */}

        <div className="vp-booking__field"> <label>Event Date</label> <div className="vp-booking__input-icon-wrap"> <Calendar size={15} className="vp-booking__input-icon" /> <input type="date" value={values.eventDate} onChange={(e) => setValue("eventDate", e.target.value)} required /> </div> </div>

        {/* Number of Guests */}

        <div className="vp-booking__field"> <label>Number of Guests</label> <div className="vp-booking__input-icon-wrap"> <Users2 size={15} className="vp-booking__input-icon" /> <input type="number" min="1" placeholder="Enter number of guests" value={values.guestCount} onChange={(e) => setValue("guestCount", e.target.value)} required /> </div> </div>

        {/* Additional Notes */}
        <div className="vp-booking__field"> <label>Additional Notes</label> <textarea rows={3} placeholder="Tell us anything else..." value={values.notes} onChange={(e) => setValue("notes", e.target.value)} /> </div>

        {/* Book Now */}

        <button type="submit" className="vp-booking__primary-btn" > Book Now </button>

        {/* Check Availability */}


        <button type="button" className="vp-booking__secondary-outline-btn" > <CalendarCheck size={16} /> Check Availability </button>


        {/* WhatsApp */}


        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="vp-booking__whatsapp-btn" > <MessageCircle size={16} /> WhatsApp Inquiry </a>

        {/* Cancellation Note */}

        <p className="vp-booking__note"> <ShieldCheck size={14} /> Free cancellation up to 7 days before the event. </p> </form> </aside>);
}