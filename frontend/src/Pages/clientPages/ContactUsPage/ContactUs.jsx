import "./ContactUs.css";
import contactus from "../../../Assets/contactus.jfif";
import { useNavigate } from 'react-router-dom';
export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
    <section className="contact-page my-5">

      {/* Left Side */}
      <div className="contact-left">
        <img
          src={contactus}
          alt="Wedding Venue"
        />

        <div className="overlay">
          <h3 className="fst-italic">AI-WeddingHub</h3>

          <h2>
            Let's Plan
            <br />
            Your Dream Wedding
          </h2>

          <p className="fst-italic pt-3">
            Our AI-powered wedding planner helps you discover venues,
            photographers, decorators, caterers, and everything you need
            for your special day.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">

        <div className="contact-card">

          <h2>Contact Us</h2>

          <p className="fst-italic">
            We'd love to hear from you.
            Send us your questions and we'll get back to you soon.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

      </div>

{/* Floating action button */}
      <button type="button" className="ww-fab" aria-label="AI Assistant" title='Need Wedding Ideas? Ask AI' onClick={() => navigate('/Chatbot')}>
        <i className="bi bi-stars"></i>
      </button>

    </section>

     

      </>
  );
}