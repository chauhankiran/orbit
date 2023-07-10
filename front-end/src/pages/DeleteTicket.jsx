import { useNavigate } from "react-router-dom";

const DeleteTicket = ({ showDeleteTicketModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteTicketModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/tickets/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/tickets");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteTicket</h2>
        <p>Are you sure you want to delete this ticket?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteTicket;
