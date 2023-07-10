import { useNavigate } from "react-router-dom";

const DeleteContact = ({ showDeleteContactModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteContactModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/contacts");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteContact</h2>
        <p>Are you sure you want to delete this contact?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteContact;
