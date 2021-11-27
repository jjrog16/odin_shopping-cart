import React from "react";
import Cards from "../Cards";

function Menu(props) {
  return (
    <>
      <Cards
        cupcakes={props.cupcakes}
        increaseOrderCount={props.increaseOrderCount}
        decreaseOrderCount={props.decreaseOrderCount}
        addToCart={props.addToCart}
      />
    </>
  );
}

export default Menu;
