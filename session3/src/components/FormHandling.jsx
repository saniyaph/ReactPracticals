import React, { useState } from "react";

const FormHandling = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    alert(`Username: ${uname}`);
  };
  return (
    <>
      <div class="container mt-5 mb-5" style={{ maxWidth: "500px" }}>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body p-4 bg-dark">
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      onChange={(e) => setUname(e.target.value)}
                      placeholder=""
                    />
                    <label for="formId1">Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      onChange={(e) => setPass(e.target.value)}
                      placeholder=""
                    />
                    <label for="formId1">Password</label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Login
                    </button>
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

export default FormHandling;
