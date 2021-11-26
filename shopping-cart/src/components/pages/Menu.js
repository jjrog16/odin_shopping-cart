import React from "react";
import Cards from "../Cards";

function Menu(props) {
  return (
    <>
      <Cards cupcakes={props.cupcakes} />
    </>
  );
}

export default Menu;
