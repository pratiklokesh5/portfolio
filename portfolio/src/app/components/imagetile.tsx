"use client";

export default function ImageTile({
  src,
  alt,
  caption,
}: {
  src?: string;
  alt: string;
  caption?: string;
}) {
  const hasImage = Boolean(src);

  return (
    <div className={`image-tile ${hasImage ? "" : "placeholder"}`}>
      {hasImage && (
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement?.classList.add("placeholder");
          }}
        />
      )}

      {caption ? <div className="image-caption">{caption}</div> : null}
    </div>
  );
}
