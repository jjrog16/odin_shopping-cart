import React from "react";
import CardItem from "./CardItem";

function Cards(props) {
  return (
    <>
      <h1>Choose any of our amazing cupcakes!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {props.cupcakes.map((cupcake) => {
              return <CardItem key={cupcake.id} cupcakes={cupcake} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cards;
