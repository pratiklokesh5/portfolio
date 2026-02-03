import GalleryGrid from "../components/GalleryGrid";

const photos = [
  { src: "/gallery/photo-4.jpg", caption: "Na-Pali Coast" },
  { src: "/gallery/photo-3.jpg", caption: "Na-Pali Coast" },
  { src: "/gallery/photo-2.jpg", caption: "Na-Pali Coast" },
  { src: "/gallery/photo-1.jpg", caption: "Na-Pali Coast" },
];

export default function Gallery() {
  return (
    <section className="page page-wide">
      <h1>Gallery</h1>
      <p className="subtitle">A collection of photos I’ve captured.</p>

      <GalleryGrid photos={photos} />
    </section>
  );
}
