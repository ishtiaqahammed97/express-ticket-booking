import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top-fixed">
        <div className="container-fluid">
          <a className="navbar-brand ">
            <Link to="/">Express Ticket Booking</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5">
              <a className="nav-link active" aria-current="page">
                <Link to="/">Home</Link>
              </a>
              <a className="nav-link">
                <Link to="/login">Login</Link>
              </a>
              <a className="nav-link">
                <Link to="/schedule">Train Schedule</Link>
              </a>
              <a className="nav-link">
                <Link to="/admin">Admin</Link>
              </a>
              <a className="nav-link">
                <Link to="/purchase">Purchase History</Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
