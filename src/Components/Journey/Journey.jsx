import { useState, useEffect, useContext } from "react";
import Ticket from "../Ticket/Ticket";
import "./Journey.css";
import Cart from "../Cart/Cart";
import { UserContext } from "../../App";

const Journey = () => {
  const [tickets, setTickets] = useState([]);
  const [booked, setBooked] = useState([]);
  const [logMessage, setLogMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleBooking = (selectedTicket) => {
    // console.log(selectedTicket);
    // const bookedTicket = [...booked, selectedTicket];

    // selected ticket
    const bookedTicket = selectedTicket;

    // get user from local storage
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);

    // set ticket id to local storage, so that it can fetch
    // later in order review page
    localStorage.setItem("selectedTicket", JSON.stringify(bookedTicket));

    // if user exists and loggedin, set ticket to the state
    if (user.username) {
      // console.log("user ache", bookedTicket);
      setBooked(bookedTicket);
    } else {
      setLogMessage("Please login first");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // console.log(tickets);
  return (
    <div>
      <span className="log-message">{logMessage ? logMessage : ""}</span>
      <div className="shop-container">
        <div className="journey-container">
          {/*  loop through and print tickets */}
          {tickets.map((ticket) => (
            <Ticket
              ticket={ticket}
              handleBooking={handleBooking}
              key={ticket.id}
            ></Ticket>
          ))}
        </div>

        <div className="cart-container">
          <Cart booked={booked}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Journey;
