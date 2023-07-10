import { useNavigate } from "react-router-dom";

const DeleteDeal = ({ showDeleteDealModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteDealModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/deals/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/deals");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteDeal</h2>
        <p>Are you sure you want to delete this deal?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteDeal;
