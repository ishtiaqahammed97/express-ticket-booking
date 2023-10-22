import "./Ticket.css";

const Ticket = (props) => {
  const { id, From, To, Train, Time, Prise, classes } = props.ticket;
  // console.log(Prise);
  const handleBooking = props.handleBooking;

  return (
    <div className="ticket-container">
      <h2 className="title">
        Route: {From} - {To}
      </h2>
      <h3 className="title">Train: {Train}</h3>
      <h5 className="detail">Time: {Time}</h5>
      <h6 className="detail">Price: {Prise}</h6>
      <h6 className="detail">Class: {classes}</h6>
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
