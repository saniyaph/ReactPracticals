import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{ maxWidth: "350px" }}>
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
