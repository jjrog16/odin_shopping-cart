import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import ShoppingCart from "./components/pages/ShoppingCart";
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
      price: Number(3.0).toFixed(2),
      cupcakeCount: 0,
      totalPrice: function () {
        return this.price * this.cupcakeCount;
      },
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "chocolate cupcake",
      title: "Chocolate Cupcake",
      desc: "For those that need a bit of chocolate love in their life",
      price: Number(5.0).toFixed(2),
      cupcakeCount: 0,
      totalPrice: function () {
        return this.price * this.cupcakeCount;
      },
    },
    {
      id: uniqid(),
      image: CUPCAKEIMAGE,
      imgAlt: "carrot cake cupcake",
      title: "Carrot Cake Cupcake",
      desc: "It counts as a vegetable, we promise",
      price: Number(6.9).toFixed(2),
      cupcakeCount: 0,
      totalPrice: function () {
        return this.price * this.cupcakeCount;
      },
    },
  ]);

  function incrementCupcakeCount(id) {
    setCupcakes(() => {
      return cupcakes.map((item) => {
        if (item.id === id) {
          return { ...item, cupcakeCount: item.cupcakeCount + 1 };
        }
        return item;
      });
    });
  }

  function decrementCupcakeCount(id) {
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

  const [shoppingCart, setShoppingCart] = useState([]);

  // Appends the cupcake object to the shopping cart array after "Add to order" is clicked
  function addToCart(order) {
    setShoppingCart(() => {
      // Add an additional property of totalPrice to help have a running total
      return [...shoppingCart, order];
    });
  }

  return (
    <>
      <BrowserRouter>
        <NavBar cart={shoppingCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <Menu
                cupcakes={cupcakes}
                increaseOrderCount={incrementCupcakeCount}
                decreaseOrderCount={decrementCupcakeCount}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<ShoppingCart checkoutCart={shoppingCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
