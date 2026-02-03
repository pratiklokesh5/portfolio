"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Photo = { src: string; caption: string };

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
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
            <Image
              src={p.src}
              alt={p.caption}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={i < 2}  // first couple load faster
            />
            <div className="gallery-caption">{p.caption}</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="100vw"
              priority
            />
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
