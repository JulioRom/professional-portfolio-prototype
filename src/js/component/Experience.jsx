import React from "react";
const Experience = () => {
    return (
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center">Experience</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>Ingeniero en Desarrollo de Aplicaciones</h4>
              <p><strong>Caul S.A.</strong> - Santiago, CL (Nov 2024 - Oct 2023)</p>
              <ul>
                <li>Designed and implemented integrations for over 50 industrial devices using technologies like Java, JUnit, and Docker.</li>
                <li>Led the development of advanced data collection and visualization services with Power BI and Grafana.</li>
                <li>Collaborated with multidisciplinary teams to tailor solutions to client needs.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Ingeniero en Automatización y Robótica</h4>
              <p><strong>Sodimac S.A.</strong> - Santiago, CL (Sept 2023 - May 2019)</p>
              <ul>
                <li>Coordinated and led integration tests for warehouse management systems using Node.js and Jenkins.</li>
                <li>Developed prototypes for process automation with Node.js and Vue.</li>
                <li>Implemented validation processes that reduced operational errors by 15%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Experience;