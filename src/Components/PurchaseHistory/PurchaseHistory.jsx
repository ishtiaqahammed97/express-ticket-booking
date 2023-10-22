import "./PurchaseHistory.css";

const PurchaseHistory = (props) => {
  const { username, email, From, To, Time, Prise, Train } = props.purchases;
  //   console.log(props.purchases);
  return (
    <div>
      <h3>Name: {username}</h3>
      <h6 className="email">Email: {email}</h6>
      <div className="ticket-container">
        <h5 className="title">
          {From} To: {To}
        </h5>
        <h6 className="title">Train: {Train}</h6>
        <h6 className="detail">Time: {Time}</h6>
        <h6 className="detail">Price: {Prise}</h6>
      </div>
    </div>
  );
};

export default PurchaseHistory;
