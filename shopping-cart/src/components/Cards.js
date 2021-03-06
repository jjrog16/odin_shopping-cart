import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards(props) {
  return (
    <>
      <h1 className="menu-title">Choose any of our amazing cupcakes!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {props.cupcakes.map((cupcake) => {
              return (
                <CardItem
                  key={cupcake.id}
                  cupcakes={cupcake}
                  increaseOrderCount={props.increaseOrderCount}
                  decreaseOrderCount={props.decreaseOrderCount}
                  addToCart={props.addToCart}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cards;
