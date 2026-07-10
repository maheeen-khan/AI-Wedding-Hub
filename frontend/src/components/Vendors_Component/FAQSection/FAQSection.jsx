import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQSection.css";

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="vp-faq">
      <h2 className="vp-faq__title">Frequently Asked Questions</h2>
      <div className="vp-faq__list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="vp-faq__item">
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="vp-faq__question"
              >
                {faq.question}
                <ChevronDown
                  size={16}
                  className={
                    isOpen ? "vp-faq__chevron vp-faq__chevron--open" : "vp-faq__chevron"
                  }
                />
              </button>
              {isOpen && <p className="vp-faq__answer">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
