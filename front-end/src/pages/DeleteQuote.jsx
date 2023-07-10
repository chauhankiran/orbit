import { useNavigate } from "react-router-dom";

const DeleteQuote = ({ showDeleteQuoteModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteQuoteModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/quotes/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/quotes");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteQuote</h2>
        <p>Are you sure you want to delete this quote?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteQuote;
