import React, { useState } from "react";

const UseStateArray = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");

  const addEmp = () => {
    setEmployees([...employees, { e_name: name }]);
  };

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={addEmp}>Add Employee</button>

      <ul>
        {employees.map((emp, index) => (
          <li key={index}>{emp.e_name}</li>
        ))}
      </ul>
    </>
  );
};

export default UseStateArray;
