import React from "react";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row ">
              <div className="col">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                    />
                    <label htmlFor="formId1">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                    />
                    <label htmlFor="formId1">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                    />
                    <label htmlFor="formId1">Password</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
