import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const { cupcakes } = props;

  return (
    <>
      <li key={cupcakes.id} className="cards-item">
        <figure className="cards-item-pic-wrap">
          <img
            src={cupcakes.image}
            alt={cupcakes.imgAlt}
            className="cards-item-img"
          />
        </figure>
        <div className="cards-item-info">
          <h2 className="cards-item-title">{cupcakes.title}</h2>
          <h5 className="cards-item-text">{cupcakes.desc}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
