import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => setTicket(data.data));
  }, [id]);

  return <h1>{ticket.name}</h1>;
};

export default ShowTicket;
