import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTicket = () => {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({});

  const handleCreateTicket = (e) => {
    e.preventDefault();

    const ticketObj = {
      name: ticket.name,
    };

    fetch("http://localhost:5000/tickets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/tickets/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add ticket</h1>
      <form method="post" onSubmit={handleCreateTicket}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Email forwarder is not working"
            onChange={handleChange}
            value={ticket.name || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddTicket;
