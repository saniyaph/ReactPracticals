import React, { useState } from "react";

const ProfileEditor = () => {
  const [emp, setEmp] = useState({ name: "", age: 0, email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setEmp({ name: "", age: 0, email: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emp.name}
          onChange={(e) => setEmp({ ...emp, name: e.target.value })}
        />
        <input
          type="text"
          value={emp.age}
          onChange={(e) => setEmp({ ...emp, age: e.target.value })}
        />
        <input
          type="text"
          value={emp.email}
          onChange={(e) => setEmp({ ...emp, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{emp.name}</h1>
      <h1>{emp.age}</h1>
      <h1>{emp.email}</h1>
    </>
  );
};

export default ProfileEditor;
