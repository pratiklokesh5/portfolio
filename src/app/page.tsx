const ReferenceLink = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  return (
    <a
      className="ref-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
};

import ImageTile from "./components/imagetile";

export default function Home() {
  return (
    <section className="page">
      <h1>Pratik Lokesh</h1>
      <p className="subtitle">Electrical Engineering @ UCSC | TerraEd</p>

      <p>
      I’m an electrical engineering student focused on robotics, embedded systems,
      and hands-on hardware development. I like taking ideas from concept to
      working systems, with an emphasis on clean design and real-world performance.
      </p>
      <div className="card-meta">
                <div>
                  <div className="card-section-title">Links</div>
                  <div className="ref-links">
                    <ReferenceLink label="Resume" href="https://drive.google.com/file/d/1FCy3-2G5qyUgj2muaGAfWMQ0bV6pEY5u/view?usp=drive_link" />
                    <ReferenceLink label="LinkedIn" href="https://www.linkedin.com/in/pratiklokesh5/" />
                    <ReferenceLink label="Photography Account" href="https://www.instagram.com/jpg.pratik/" />
                  </div>
                </div>
              </div>
    </section>
  );
}
