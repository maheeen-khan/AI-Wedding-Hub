import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section className="contact-page">

      {/* Left Side */}
      <div className="contact-left">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
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

    </section>
  );
}