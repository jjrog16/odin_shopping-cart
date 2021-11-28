import React, { useState } from "react";
import OrderItem from "../OrderItem";
import "../../styles/ShoppingCart.css";

function ShoppingCart(props) {
  const { checkoutCart } = props;
  console.log(`State of the shopping cart: ${checkoutCart}`);

  //TODO: Find bug where multiple orders break final price
  function calcTotalPrice() {
    switch (checkoutCart.length) {
      case 0:
        // Return an object with cupcakeCount otherwise reduce will
        // return a number, which does not have the cupcakeCount property
        return {
          totalPrice: function () {
            return 0;
          },
        };

      case 1:
        // Returns the object so that totalPrice can be called
        return checkoutCart[0];

      default:
        return checkoutCart.reduce((previousValue, currentValue) => {
          // Return an object with totalPrice otherwise reduce will
          // return a number, which does not have the cupcakeCount property
          console.log(`Prev Total Price: ${previousValue.totalPrice}`);
          console.log(`Current Total Price: ${currentValue.totalPrice}`);
          console.log(`Previous: ${JSON.stringify(previousValue)}`);
          console.log(`Current: ${JSON.stringify(currentValue)}`);

          return {
            totalPrice: function () {
              return previousValue.totalPrice() + currentValue.totalPrice();
            },
          };
        });
    }
  }

  return (
    <>
      <h1 className="order-title">Your Order</h1>
      <div className="order-container">
        <div className="order-wrapper">
          <ul className="order-items">
            {checkoutCart.map((item) => {
              return <OrderItem key={item.id} orders={item} />;
            })}
          </ul>
        </div>
        <div className="order-total">
          <div className="order-total-top">
            <h2 className="final-price">Order Total:</h2>
            <p className="total-price">{`$${Number(
              calcTotalPrice().totalPrice()
            ).toFixed(2)}`}</p>
          </div>
          <div className="order-total-bottom">
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
