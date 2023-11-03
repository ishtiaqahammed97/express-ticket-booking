import "./Ticket.css";

const Ticket = (props) => {
  const { id, from, to, train, time, price, className } = props.ticket;
  // console.log(Prise);
  const handleBooking = props.handleBooking;

  return (
    <div className="ticket-container">
      <h2 className="title">
        Route: {from} - {to}
      </h2>
      <h3 className="title">Train: {train}</h3>
      <h5 className="detail">Time: {time}</h5>
      <h6 className="detail">Price: {price}</h6>
      <h6 className="detail">Class: {className}</h6>
      <button
        onClick={() => handleBooking(props.ticket)}
        className="ticket-btn"
      >
        Book Now
      </button>
    </div>
  );
};

export default Ticket;
