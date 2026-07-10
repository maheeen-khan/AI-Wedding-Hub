import { Star } from "lucide-react";
import "./ReviewsSection.css";

function StarRating({ rating }) {
  return (
    <div className="vp-reviews__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating ? "vp-reviews__star vp-reviews__star--filled" : "vp-reviews__star"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsSection({ title = "Couple Reviews", reviews = [] }) {
  return (
    <section className="vp-reviews">
      <div className="vp-reviews__header">
        <h2 className="vp-reviews__title">{title}</h2>
        <button className="vp-reviews__write-btn">Write a review</button>
      </div>

      <div className="vp-reviews__list">
        {reviews.map((review) => (
          <div key={review.name} className="vp-reviews__card">
            <div className="vp-reviews__card-top">
              <div className="vp-reviews__author">
                <div className="vp-reviews__avatar">{review.name.charAt(0)}</div>
                <div>
                  <p className="vp-reviews__name">{review.name}</p>
                  <p className="vp-reviews__event-type">{review.eventType}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="vp-reviews__comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
