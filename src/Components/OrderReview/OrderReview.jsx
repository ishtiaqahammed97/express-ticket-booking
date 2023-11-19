import Payment from "../Payment/Payment";
import Order from "./Order";

const OrderReview = () => {
  // const [matchedTicket, setMatchedTicket] = useState([]);

  // get ticket that selected from local storage
  // JSON.parse(localStorage.getItem("date"));
  const selectedTicket = JSON.parse(localStorage.getItem("selectedTicket"));
  console.log(selectedTicket);

  return (
    <div className="d-flex">
      <div>
        <Order selectedTicket={selectedTicket}></Order>
      </div>
      <Payment></Payment>
    </div>
  );
};

export default OrderReview;
