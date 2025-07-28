import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloFunctional from "./components/HelloFunctional";
import HelloClassComponent from "./components/HelloClassComponent";

function App() {
  return (
    <>
      <HelloFunctional />
      <HelloClassComponent />
    </>
  );
}

export default App;
