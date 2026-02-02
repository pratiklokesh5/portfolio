export default function Gallery() {
  return (
    <section className="page page-wide">
      <h1>Gallery</h1>
      <p className="subtitle">A collection of photos I’ve captured.</p>

      <div className="gallery-grid">
        <div className="gallery-item placeholder">
          <div className="gallery-caption">Caption placeholder</div>
        </div>
        <div className="gallery-item placeholder">
          <div className="gallery-caption">Caption placeholder</div>
        </div>
        <div className="gallery-item placeholder">
          <div className="gallery-caption">Caption placeholder</div>
        </div>
        <div className="gallery-item placeholder">
          <div className="gallery-caption">Caption placeholder</div>
        </div>

        {/* Add more tiles to test scrolling */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="gallery-item placeholder">
            <div className="gallery-caption">Caption placeholder</div>
          </div>
        ))}
      </div>
    </section>
  );
}
