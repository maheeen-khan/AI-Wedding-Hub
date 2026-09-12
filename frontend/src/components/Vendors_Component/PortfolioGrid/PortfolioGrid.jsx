import "./PortfolioGrid.css";

export default function PortfolioGrid({
  title = "Portfolio Highlights",
  images = [],
}) {
  return (
    <section className="vp-portfolio mt-5 mb-3">
      <div className="vp-portfolio__header mb-4">
        <h2 className="vp-portfolio__title">{title}</h2>

        <button className="vp-portfolio__view-all">
          View All Work
        </button>
      </div>

      <div className="vp-portfolio__grid">
        {images.map((image, i) => (
          <div key={i} className="vp-portfolio__item">
            <img
              src={image.src}
              alt={image.alt || `Portfolio ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}