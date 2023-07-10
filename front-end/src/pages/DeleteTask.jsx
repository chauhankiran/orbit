import { useNavigate } from "react-router-dom";

const DeleteTask = ({ showDeleteTaskModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteTaskModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/tasks");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteTask</h2>
        <p>Are you sure you want to delete this task?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteTask;
