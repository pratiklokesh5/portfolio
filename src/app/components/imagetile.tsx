type Props = {
  src?: string;
  alt: string;
  caption?: string;
};

export default function ImageTile({ src, alt, caption }: Props) {
  const isPlaceholder = !src;

  return (
    <div className={`image-tile${isPlaceholder ? " placeholder" : ""}`}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : null}
      {caption ? <div className="image-caption">{caption}</div> : null}
    </div>
  );
}
