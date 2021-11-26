import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import CUPCAKEIMAGE from "../src/images/cupcake_favicon.png";
import uniqid from "uniqid";
import "./styles/App.css";

function App() {
  const [cupcakes, setCupcakes] = useState([
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "vanilla cupcake",
      title: "Vanilla Cupcake",
      desc: "A delicious classic made to perfection",
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "chocolate cupcake",
      title: "Chocolate Cupcake",
      desc: "For those that need a bit of chocolate love in their life",
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "carrot cake cupcake",
      title: "Carrot Cake Cupcake",
      desc: "A cupcake Bugs Bunny would marry",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu cupcakes={cupcakes} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
