import React from "react";
import "../styles/CardItem.css";

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
          <h5 className="cards-item-price">{`$${cupcakes.price}`}</h5>
        </div>
        <div className="add-to-cart-container">
          <div className="add-to-cart-count-wrapper">
            <div className="minus">
              <button
                className="btn-minus"
                onClick={() => props.decreaseOrderCount(cupcakes.id)}
              >
                -
              </button>
            </div>
            <div className="counter">{cupcakes.cupcakeCount}</div>
            <div className="plus">
              <button
                className="btn-plus"
                onClick={() => props.increaseOrderCount(cupcakes.id)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="add-to-cart"
            onClick={() => props.addToCart(cupcakes)}
          >
            Add to Cart
          </button>
        </div>
      </li>
    </>
  );
}

export default CardItem;
