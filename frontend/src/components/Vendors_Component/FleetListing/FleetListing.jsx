import "./FleetListing.css";

/**
 * cars: [{ name, image, specs: string, price, badge? ("Popular" etc) }]
 */
export default function FleetListing({ title = "Our Fleet", cars = [] }) {
  return (
    <section className="vp-fleet">
      <h2 className="vp-fleet__title">{title}</h2>
      <div className="vp-fleet__list">
        {cars.map((car) => (
          <div key={car.name} className="vp-fleet__card">
            <img src={car.image} alt={car.name} className="vp-fleet__image" />
            <div className="vp-fleet__info">
              <div className="vp-fleet__name-row">
                <p className="vp-fleet__name">{car.name}</p>
                {car.badge && <span className="vp-fleet__badge">{car.badge}</span>}
              </div>
              <p className="vp-fleet__specs">{car.specs}</p>
            </div>
            <div className="vp-fleet__price-col">
              <p className="vp-fleet__price">{car.price}</p>
              <button className="vp-fleet__details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
