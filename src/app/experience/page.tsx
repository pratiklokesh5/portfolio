import ImageTile from "../components/imagetile";

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

export default function Experience() {
  return (
    <section className="page">
      <h1>Experience</h1>

      {/* TerraEd */}
      <div className="card">
        <h2>Founder and Head Coach</h2>
        <p>TerraEd • June 2023 – Present</p>
        <p>
          Led robotics and engineering initiatives at TerraEd, developing
          hands-on curricula and guiding students through hardware,
          programming, and system-level problem solving. Emphasized
          practical engineering workflows, iterative design, and applied
          technical skills.
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="Organization Website" href="https://terraedu.org" />
            </div>
          </div>

          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/experience/experience-1.jpg" alt="FTC Robot" caption="FTC Students learning CAD"/>
              <ImageTile src="/experience/experience-2.jpg" alt="FTC Robot 2" caption="TerraBats Robot competing at 1/18/2026 tournament"/>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Coordinator */}
      <div className="card">
        <h2>Robotics Coordinator</h2>
        <p>
          Ida Jew Academy and Valle Vista Elementary • August 2024 – Present
        </p>
        <p>
          Piloted and led a K–8 robotics program within the Mount Pleasant
          School District, designing and implementing hands-on engineering
          curricula centered on mechanical design, electronics, and
          programming. Coordinated and coached three competitive robotics
          teams, overseeing system integration, testing, and iterative
          design while guiding students through real-world engineering
          workflows.
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="FLL Media Post" href="https://www.facebook.com/watch/?v=1141634661052493" />
              <ReferenceLink label="FTC Media Post" href="https://www.instagram.com/p/DFqTgHdyRbx/" />
            </div>
          </div>

          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/experience/experience-4.jpg" alt="IJAVVE FLL 2025" caption="IJAVVE FLL Competing at tournament 2025"/>
              <ImageTile src="/experience/experience-5.jpg" alt="IJAVVE FTC 2025" caption="IJAVVE FTC 2025"/>
              <ImageTile alt="Student team" caption="Team testing session" />
            </div>
          </div>
        </div>
      </div>

      {/* Terrabats FTC */}
      <div className="card">
        <h2>Mechanical and Electrical Lead</h2>
        <p>TerraBats FTC • June 2018 – July 2023</p>
        <p>
          Served as Captain and Hardware Lead for the Terrabats FIRST Tech
          Challenge team, leading peers across both technical and
          non-technical disciplines while driving the team’s engineering
          direction. Oversaw mechanical and electrical system design,
          including CAD-driven part fabrication, CNC machining, and rapid
          prototyping through 3D printing. Worked extensively with control
          systems, sensors, and system integration, developing reliable
          mechanisms through iterative design, testing, and validation.
          Managed project timelines and team workflows to support efficient
          development cycles in competitive environments. Guided the team to
          top competitive results, including consecutive Inspire Awards,
          Northern California Championship titles, a #1 ranking in
          California, a top-10 global finish, and participation at the FIRST
          Tech Challenge World Championship and the Maryland Tech
          Invitational at Johns Hopkins University. Additionally mentored
          and coached hundreds of students, establishing and supporting
          rookie teams as entry points into competitive robotics and applied
          engineering.
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="Team Page" href="https://terrabats.weebly.com/" />
              <ReferenceLink label="Team Instagram" href="https://www.instagram.com/terrabats14525/" />
              <ReferenceLink label="2023 World Record" href="https://www.youtube.com/watch?v=g7dQ6zkN28U" />
              <ReferenceLink label="Autonomous Robot Control Showcase" href="https://www.youtube.com/watch?v=iF4p_2iWw6U" />
              <ReferenceLink label="Team Records" href="https://ftcscout.org/teams/14525?season=2022" />
            </div>
          </div>

          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/experience/experience-6.jpg" alt="2023 Worlds" caption="My 2023 world championship robot"/>
              <ImageTile src="/experience/experience-7.jpg" alt="Norcal finals" caption="Playing at the NorCal championship finals"/>
              <ImageTile src="/experience/experience-8.jpg" alt="Manufacturing" caption="Custom manufacturing my robot using CNC machines"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
