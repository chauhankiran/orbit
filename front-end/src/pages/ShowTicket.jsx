import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteTicket from "./DeleteTicket";

const ShowTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const [showDeleteTicketModal, setShowDeleteTicketModal] = useState(false);

  const handleDeleteTicket = () => {
    setShowDeleteTicketModal(!showDeleteTicketModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/tickets/${id}`)
      .then((res) => res.json())
      .then((data) => setTicket(data.data));
  }, [id]);

  return (
    <>
      <h1>{ticket.name}</h1>
      <button onClick={handleDeleteTicket}>Delete</button>
      <DeleteTicket showDeleteTicketModal={showDeleteTicketModal} id={id} onClose={handleDeleteTicket} />
    </>
  );
};

export default ShowTicket;
