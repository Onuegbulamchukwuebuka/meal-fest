import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Singnup from "./Screen/Signup/Singnup";
import NarBar from "./Componet/NavBar/NavBar";
import Login from "./Screen/Login/Login";
import Categories from "./Pages/Categories/Categories";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import UserProfile from "./Screen/UserProfile/UserProfile";
import Shop from "./Pages/Order/Order";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Singnup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Order" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
