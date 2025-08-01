import React, { useState } from "react";

const EventHandling = () => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>{name}</h1>
      <input
        placeholder="onchange event handler.."
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default EventHandling;
