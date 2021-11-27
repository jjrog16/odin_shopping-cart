import React from "react";
import "../styles/OrderItem.css";

function OrderItem(props) {
  const { orders } = props;
  console.log(orders);

  return (
    <>
      <li key={orders.id} className="orders-item">
        <div className="order-top">
          <figure className="orders-item-pic-wrap">
            <img
              src={orders.image}
              alt={orders.imgAlt}
              className="orders-item-img"
            />
          </figure>
          <div className="orders-item-info">
            <h2 className="orders-item-title">{orders.title}</h2>
            <h5 className="orders-item-price">{`$${orders.price}`}</h5>
          </div>
        </div>
        <div className="order-bottom">
          <button className="remove">Remove</button>
          <p className="orders-amount">{orders.cupcakeCount}</p>
        </div>
      </li>
    </>
  );
}

export default OrderItem;
