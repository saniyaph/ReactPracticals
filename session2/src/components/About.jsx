import React from "react";

const About = ({ image, height }) => {
  const style_ex = {
    backgroundColor: "wheat",
    maxWidth: "250px",
  };
  return (
    <>
      <div className="container">
        <div class="row">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="col-md-3">
              <div class="card" style={style_ex}>
                <img class="card-img-top" src={image} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
