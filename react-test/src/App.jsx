import FunctionalComponent from "./components/FunctionalComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./components/UserCard";
import LoginStatus from "./components/LoginStatus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./bootstrap_navigation/Home";
import About from "./bootstrap_navigation/About";
import Contact from "./bootstrap_navigation/Contact";
import Register from "./bootstrap_navigation/Register";
import Navbar from "./public/Navbar";
import Todo from "./TodoListComponent/Todo";
import ProfileEditor from "./components/ProfileEditor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <FunctionalComponent />
        <UserCard name="Tom" email="tom@gmail.com" />
        <UserCard name="Tom" email="tom@gmail.com" />
        <LoginStatus isLoggedIn={false} />

        <Todo />
        <ProfileEditor />
      </BrowserRouter>
    </>
  );
}

export default App;
