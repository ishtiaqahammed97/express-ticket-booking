import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { from, to, train, time, price, className } = props.booked;

  return (
    <div>
      <h5 className="title">
        Route: {from} - {to}
      </h5>
      <h6 className="title">Train: {train}</h6>
      <h6 className="detail">Time: {time}</h6>
      <h6 className="detail">Price: {price}</h6>
      <h6 className="detail">Class: {className}</h6>

      <Link to="order-review">
        <button> Order Review</button>
      </Link>
    </div>
  );
};

export default Cart;
