"use client";

import { useEffect, useState } from "react";

type Photo = {
  src: string;
  caption: string;
};

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setActive(p)}
            type="button"
            aria-label={`Open image: ${p.caption}`}
          >
            <img src={p.src} alt={p.caption} />
            <div className="gallery-caption">{p.caption}</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption} />
            <div className="lightbox-caption">{active.caption}</div>
            <button
              className="lightbox-close"
              onClick={() => setActive(null)}
              type="button"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
