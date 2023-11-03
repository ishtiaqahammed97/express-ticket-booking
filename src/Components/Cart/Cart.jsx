import { useEffect, useState } from "react";
import "./Cart.css";
// import { Link } from "react-router-dom";

const Cart = (props) => {
  const { id, from, to, train, time, price, className } = props.booked;

  const [order, setOrder] = useState([]);
  // const [user, setUser] = useState({});
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

    const newOrder = { ...props.booked, ...user };
    if (id) {
      setMessage(msg);
    } else {
      setMessage("Please select your ticket");
    }
    setOrder(newOrder);
    setMessage("");
  };

  return (
    <div>
      <h5 className="title">
        Route: {from} - {to}
      </h5>
      <h6 className="title">Train: {train}</h6>
      <h6 className="detail">Time: {time}</h6>
      <h6 className="detail">Price: {price}</h6>
      <h6 className="detail">Class: {className}</h6>
      <button onClick={handleOrder} className="ticket-btn">
        Place Order
      </button>
      <br />

      {message ? <span className="success-msg">{message}</span> : ""}
    </div>
  );
};

export default Cart;
