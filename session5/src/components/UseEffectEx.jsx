import React, { useEffect, useState } from "react";

const UseEffectEx = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count : ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Submit</button>
    </div>
  );
};

export default UseEffectEx;
