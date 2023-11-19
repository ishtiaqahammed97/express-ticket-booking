import React, { useEffect, useState } from "react";
import "./Order.css";

const Order = (props) => {
  const { id, from, to, train, time, price, className } = props.selectedTicket;
  // console.log(props);

  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState("");
  // console.log(order);

  useEffect(() => {
    fetch("http://localhost:3000/placeOrder", {
      method: "POST", // sending data to server
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
  }, [order]);

  const handleOrder = () => {
    const msg = "Order Successful";
    // take loggedin user
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);

    const newOrder = { ...props.selectedTicket, ...user };
    if (id) {
      setMessage(msg);
    } else {
      setMessage("Please select your ticket");
    }
    setOrder(newOrder);
    setMessage("");
  };
  return (
    <div className="review">
      <h2>This is order</h2>

      <h6 className="title">
        Route: {from} - {to}
      </h6>
      <h6 className="title">Train: {train}</h6>
      <h6 className="detail">Time: {time}</h6>
      <h6 className="detail">Price: {price}</h6>
      <h6 className="detail">Class: {className}</h6>
      <button onClick={handleOrder} className="ticket-btn">
        Place Order
      </button>

      {message ? <span className="success-msg">{message}</span> : ""}
    </div>
  );
};

export default Order;
