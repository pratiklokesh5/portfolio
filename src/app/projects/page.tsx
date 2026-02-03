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

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>

      {/* TerraEd */}
      <div className="card">
        <h2>Cadence EDA</h2>
        <p>ECE 174 | January 2026 - Present</p>
        <p>
          In ECE 174, I have been working extensively with Cadence tools to design, analyze, and verify analog and mixed-signal circuits. My work so far has involved schematic capture in Cadence Capture, circuit simulation and analysis, and iterative refinement based on performance metrics such as gain, bandwidth, stability, and operating point behavior. I have focused on translating theoretical circuit concepts into implementable designs, validating functionality through simulation, and debugging design issues at the schematic level. The course has emphasized disciplined circuit design methodology, attention to device-level behavior, and verification prior to layout, strengthening my practical skills in professional EDA workflows.
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/project/project-2.png" alt="Wireless Transmitter" caption="Wireless Transmitter Capture"/>
            </div>
          </div>
        </div>
      </div>

      {/* TerraEd */}
      <div className="card">
        <h2>Custom PID Control for Competitive FLL via Python</h2>
        <p> August 2025 </p>
          Developed a custom Python PID control library for FIRST LEGO League robots using Pybricks, focused on improving motion consistency, accuracy, and overall system reliability. The project involved implementing and tuning PID control logic, structuring the library for modular reuse, and validating performance through iterative testing on real hardware. By abstracting complex control behavior into a robust, student-friendly interface, the library reduced variability in robot performance and allowed students to focus on strategy and engineering concepts rather than low-level debugging. This work emphasized control systems fundamentals, software reliability, and the importance of well-designed abstractions in supporting student success in competitive robotics environments.

        <div className="card-meta">
        </div>
      </div>
      
      {/* TerraEd */}
      <div className="card">
        <h2>Photovoltaic Stop Sign System</h2>
        <p>ECE 180J | March - June 2025</p>
        <p>
          Designed and built a photovoltaic-powered stop sign illumination system to improve visibility during low-light conditions. Engineered a solar energy harvesting and storage solution, integrating photovoltaic panels, battery management, and power regulation to drive high-efficiency flashing LEDs. Focused on low-power design, reliability, and autonomous operation, ensuring consistent performance across varying lighting and environmental conditions. The project emphasized practical energy systems design, power electronics fundamentals, and real-world deployment constraints.
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="Project Report" href="https://drive.google.com/file/d/1ys5Fwaiugol2k5Vhplld28AIlnjPjO45/view?usp=sharing" />
              <ReferenceLink label="Demo Video" href="https://photos.app.goo.gl/L5RuHzG3JqoaoAsk9" />
            </div>
          </div>

          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/project/project-1.jpg" alt="PV Stop Sign Assembly" caption="PV Stop Sign Assembly"/>
            </div>
          </div>
        </div>
      </div>

      {/* TerraEd */}
      <div className="card">
        <h2>DIY Motor</h2>
        <p>Physics 7B | Novemeber - December 2024</p>
        <p>
            Constructed a custom electric motor for a Physics 7B design project, involving 3D-printed mechanical components, manual fabrication, and soldered electrical connections. The motor was designed and tested to lift a 100-gram load one meter, emphasizing practical application of electromagnetics, iterative refinement, and hardware reliability.  
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="Demo Video" href="https://photos.app.goo.gl/9Ei4UmyDMqdZHt9SA" />
            </div>
          </div>
          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/project/project-3.jpg" alt="Group"/>
              <ImageTile src="/project/project-4.jpg" alt="Prototype" caption="Early Prototype"/>
              <ImageTile src="/project/project-5.jpg" alt="Final" caption="Final Motor"/>
            </div>
          </div>
        </div>
      </div>

      {/* TerraEd */}
      <div className="card">
        <h2>PowerPlay FTC Robot</h2>
        <p>FIRST Tech Challenge | September 2022 - July 2023</p>
        <p>
            During the 2022–2023 FIRST Tech Challenge season, I worked on the design and construction of the Terrabats competition robot, focusing on mechanical fabrication, electrical integration, and software development. The robot incorporated custom-designed mechanisms modeled in CAD and fabricated through machining and 3D printing, along with integrated motors, sensors, and control electronics. I performed wiring and electrical assembly, including proper crimping, connector selection, and cable management to ensure reliable power and signal distribution. On the software side, I contributed to programming and tuning robot behaviors, followed by systematic testing and iteration to improve consistency and performance under competition conditions. The project emphasized end-to-end system integration, hands-on fabrication, and rigorous testing to achieve a reliable, competition-ready robot.   
        </p>

        <div className="card-meta">
          <div>
            <div className="card-section-title">References</div>
            <div className="ref-links">
              <ReferenceLink label="Season Journey" href="https://www.youtube.com/watch?v=W9iGtA6Yp8U" />
              <ReferenceLink label="Engineering Portfolio" href="https://drive.google.com/file/d/1xDdoY6q2QWFU1PXoL7MWxUb_1QckdQeH/view?usp=sharing" />
            </div>
          </div>
          <div>
            <div className="card-section-title">Images</div>
            <div className="image-row">
              <ImageTile src="/project/project-6.jpg" alt="Fabrication" caption="In-house manufacturing robot parts using CNC"/>
              <ImageTile src="/project/project-7.jpg" alt="Odo Pod" caption="Design a custom odometry tracking pod"/>
              <ImageTile src="/project/project-8.jpg" alt="Linear slide lift" caption="Linear slide lift system"/>
              <ImageTile src="/project/project-9.jpg" alt="Robot" caption="Robot at 2023 League Tournament"/>
              <ImageTile src="/project/project-10.jpg" alt="Worlds" caption="Representing California at 2023 World Champs"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
