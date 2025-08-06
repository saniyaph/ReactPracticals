import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseStateArray />
      <UseStateObject />
    </>
  );
}

export default App;
