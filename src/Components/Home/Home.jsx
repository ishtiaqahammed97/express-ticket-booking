import { Link } from "react-router-dom/cjs/react-router-dom";
// import cover from "../../assets/railway-background.jpg";
import search from "../../assets/search.svg";
import select from "../../assets/select.svg";
import pay from "../../assets/pay.svg";
import nogod from "../../assets/nogod.png";
import bkash from "../../assets/bkash.png";
import rocket from "../../assets/rocket.svg";
import upay from "../../assets/upay.svg";
import masterCard from "../../assets/master-card.png";
import visa from "../../assets/visa.png";
import nexus from "../../assets/nexus-debit.svg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <section>
        <div className="d-flex mt-5">
          <div className="home-container">
            <h2>Welcome to Express Ticket Booking</h2>

            <Link to="/journey">
              <button className="delightful-button">Start Journey</button>
            </Link>
          </div>
          <div className="cover-slide">
            <p className="checked-sign">
              <small> Tickets can be bought online ten days in advance.</small>
            </p>
            <p className="checked-sign">
              <small>
                You can pay for the tickets using mobile financial services
              </small>
            </p>
            <p className="checked-sign">
              <small>Deducted amount would be refunded by your bank</small>
            </p>
            <p className="checked-sign">
              <small>
                Download the official{" "}
                <span className="express-text">Express Booking</span> app
              </small>
            </p>
          </div>
        </div>
      </section>

      <section className="search-select">
        <div>
          <img src={search} alt="" />
          <h2>Search</h2>
        </div>
        <div>
          <img src={select} alt="" />
          <h2>Select</h2>
        </div>
        <div>
          <img src={pay} alt="" />
          <h2>Pay</h2>
        </div>
      </section>
      {/* Payment methods */}
      <section className="payment-section">
        <hr />
        <div className="payment-method">
          <img src={nogod} alt="" />
          <img src={bkash} alt="" />
          <img src={rocket} alt="" />
          <img src={upay} alt="" />
          <img src={masterCard} alt="" />
          <img src={visa} alt="" />
          <img src={nexus} alt="" />
        </div>
        <hr />
      </section>

      <section>
        <p>
          <strong>
            * The Tickets are issued by
            <span className="express-booking">Express Ticket Booking's</span>
            Centrally Computerized Seat Reservation & Ticketing System (CCSRTS)
            and Shohoz-Synesis-Vincen JV is responsible for designing,
            development, implementation, technical operation & maintenance of
            the system.
          </strong>
        </p>
      </section>
    </div>
  );
};

export default Home;
