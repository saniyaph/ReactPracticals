import React from "react";

const emps = [
  {
    id: 1,
    name: "tom",
  },
  {
    id: 2,
    name: "jerry",
  },
  {
    id: 3,
    name: "harry",
  },
  {
    id: 4,
    name: "peter",
  },
];

const ListRendering = () => {
  return (
    <>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {emps.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListRendering;
