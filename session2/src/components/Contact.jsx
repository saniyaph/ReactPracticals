import React from "react";

const Contact = () => {
  const style_ex = {
    height: "500px",
    width: "600px",

    marginTop: "5px",
  };
  return (
    <>
      <div class="container" style={style_ex}>
        <div
          style={{
            height: "350px",
            width: "450px",
            boxShadow: "4px 2px 10px #001",
            marginTop: "80px",
            marginLeft: "50px",
            padding: "10px",
            backgroundColor: "sandybrown",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Contact US</h1>
          <div className="mt-5">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                name="formId1"
                id="formId1"
                placeholder=""
              />
              <label for="formId1">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                name="formId1"
                id="formId1"
                placeholder=""
              />
              <label for="formId1">Name</label>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
