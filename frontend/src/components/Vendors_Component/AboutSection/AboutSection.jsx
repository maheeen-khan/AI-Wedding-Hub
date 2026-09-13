import "./AboutSection.css";

export default function AboutSection({ vendorName, about }) {
  return (
    <section className="vp-about mt-5">
      <h2 className="vp-about__title">About {vendorName}</h2>
      <p className="vp-about__text mt-3">{about}</p>
    </section>
  );
}
