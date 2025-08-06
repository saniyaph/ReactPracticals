import React, { useState } from "react";

const UseStateObject = () => {
  const [emp, setEmp] = useState({ name: "", age: 0 });

  return (
    <>
      <input
        type="text"
        onChange={(e) => setEmp({ ...emp, name: e.target.value })}
      /> <br />
      <input
        type="text"
        onChange={(e) => setEmp({ ...emp, age: e.target.value })}
      />
      <h1>
        {emp.name}---{emp.age}
      </h1>
    </>
  );
};

export default UseStateObject;
