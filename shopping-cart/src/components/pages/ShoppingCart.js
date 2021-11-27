import React from "react";
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
        return { totalPrice: 0 };

      case 1:
        // Returns the object so that totalPrice can be called
        checkoutCart[0].totalPrice =
          checkoutCart[0].cupcakeCount * checkoutCart[0].price;
        return checkoutCart[0];

      default:
        return checkoutCart.reduce((previousValue, currentValue) => {
          // Return an object with totalPrice otherwise reduce will
          // return a number, which does not have the cupcakeCount property
          console.log(`Prev Total Price: ${previousValue.totalPrice}`);
          console.log(`Current Total Price: ${currentValue.totalPrice}`);
          console.log(
            `Previous: ${previousValue.cupcakeCount}(count) and ${previousValue.price}(price)`
          );
          console.log(
            `Current: ${currentValue.cupcakeCount}(count) and ${currentValue.price}(price)`
          );

          return {
            totalPrice:
              previousValue.cupcakeCount * previousValue.price +
              currentValue.cupcakeCount * currentValue.price,
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
            <p className="total-price">{`$${calcTotalPrice().totalPrice}`}</p>
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
