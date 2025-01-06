import React from "react";
const CardsSection = () => {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img
                    src="https://via.placeholder.com/500x325"
                    className="card-img-top"
                    alt="Placeholder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sapiente esse necessitatibus neque.
                    </p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default CardsSection;