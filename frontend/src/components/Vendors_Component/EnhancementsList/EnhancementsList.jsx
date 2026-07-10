import "./EnhancementsList.css";

/**
 * items: [{ name, price }]
 */
export default function EnhancementsList({ title = "Enhancements", items = [] }) {
  return (
    <section className="vp-enhancements">
      <h2 className="vp-enhancements__title">{title}</h2>
      <div className="vp-enhancements__list">
        {items.map((item) => (
          <div key={item.name} className="vp-enhancements__row">
            <span className="vp-enhancements__name">{item.name}</span>
            <span className="vp-enhancements__price">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
