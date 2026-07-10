import { useState } from "react";
import { Images } from "lucide-react";
import "./ImageGallery.css";

export default function ImageGallery({ images = [], vendorName }) {
  const [showAll, setShowAll] = useState(false);

  if (!images.length) return null;

  const [mainImage, ...rest] = images;
  const visibleThumbs = rest.slice(0, 4);
  const extraCount = rest.length - visibleThumbs.length;

  return (
    <>
      <div className="vp-gallery">
        <div className="vp-gallery__main">
          <img src={mainImage} alt={`${vendorName} main view`} />
        </div>

        <div className="vp-gallery__thumbs">
          {visibleThumbs.map((src, i) => {
            const isLast = i === visibleThumbs.length - 1 && extraCount > 0;
            return (
              <div key={i} className="vp-gallery__thumb">
                <img src={src} alt={`${vendorName} photo ${i + 2}`} />
                {isLast && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="vp-gallery__more-overlay"
                  >
                    <Images size={16} />
                    +{extraCount} more
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showAll && (
        <div className="vp-gallery__modal" onClick={() => setShowAll(false)}>
          <div className="vp-gallery__modal-grid">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`${vendorName} photo ${i + 1}`} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}


























