import React from "react";
const Projects = () => {
    return (
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Biped Robot</h5>
                  <p className="card-text">
                    Designed and developed a 12-DOF biped robot with image recognition for autonomous navigation.
                    Utilized 3D modeling, Arduino, and MATLAB for vision systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default Projects;
  