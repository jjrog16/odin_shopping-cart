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
      cupcakeCount: 0,
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "chocolate cupcake",
      title: "Chocolate Cupcake",
      desc: "For those that need a bit of chocolate love in their life",
      cupcakeCount: 0,
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "carrot cake cupcake",
      title: "Carrot Cake Cupcake",
      desc: "It counts as a vegetable, we promise",
      cupcakeCount: 0,
    },
  ]);

  function increment(id) {
    setCupcakes(() => {
      return cupcakes.map((item) => {
        if (item.id === id) {
          return { ...item, cupcakeCount: item.cupcakeCount + 1 };
        }
        return item;
      });
    });
  }

  function decrement(id) {
    setCupcakes(() => {
      return cupcakes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            // You can't go negative, so we check that the value is higher than 0
            cupcakeCount: item.cupcakeCount > 0 ? item.cupcakeCount - 1 : 0,
          };
        }
        return item;
      });
    });
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <Menu
                cupcakes={cupcakes}
                increaseOrderCount={increment}
                decreaseOrderCount={decrement}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
