import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <h1>Choose any of our amazing cupcakes!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cards;
