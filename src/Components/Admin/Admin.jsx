import { useEffect, useState } from "react";

const Admin = () => {
  const [newTickets, setNewTickets] = useState([]);
  console.log(newTickets);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    train: "",
    time: "",
    price: "",
    id: "",
    className: "S_Chair",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = { ...formData };
    setNewTickets(newTicket);
    setFormData({
      from: "",
      to: "",
      train: "",
      time: "",
      price: "",
      id: "",
      className: "S_Chair",
    });
  };

  // send data to server
  useEffect(() => {
    fetch("http://localhost:3000/addTicket", {
      method: "POST", // sending data to server
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTickets),
    });
  }, [newTickets]);

  return (
    <div className="container">
      <h2>Admin Train Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="train">Train:</label>
          <input
            type="text"
            id="train"
            name="train"
            value={formData.train}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="className">Class:</label>
          <select
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="Economy">S_Chair</option>
            <option value="Business">AC</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
