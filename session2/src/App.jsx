import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="home"
            element={
              <Home image="https://imgsrv2.voi.id/lWCHYtGOTA4U-rcYzq4Brz0pyhNZaFqI2f_nkJB9teM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMjA2MDYvMjAyMjEwMjExNTAyLW1haW4uY3JvcHBlZF8xNjY2MzQyMDE5LmpwZw.jpg" />
            }
          ></Route>
          <Route
            path="about"
            element={
              <About
                image="https://imgsrv2.voi.id/lWCHYtGOTA4U-rcYzq4Brz0pyhNZaFqI2f_nkJB9teM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMjA2MDYvMjAyMjEwMjExNTAyLW1haW4uY3JvcHBlZF8xNjY2MzQyMDE5LmpwZw.jpg"
                height="100px"
              />
            }
          ></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
