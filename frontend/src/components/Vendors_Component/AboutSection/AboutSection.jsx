import "./AboutSection.css";

export default function AboutSection({ vendorName, about }) {
  return (
    <section className="vp-about">
      <h2 className="vp-about__title">About {vendorName}</h2>
      <p className="vp-about__text">{about}</p>
    </section>
  );
}
