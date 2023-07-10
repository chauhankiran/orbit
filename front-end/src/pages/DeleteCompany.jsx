import { useNavigate } from "react-router-dom";

const DeleteCompany = ({ showDeleteCompanyModal, id, onClose }) => {
  const navigate = useNavigate();

  if (!showDeleteCompanyModal) {
    return null;
  }

  const handleDelete = () => {
    fetch(`http://localhost:5000/companies/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        navigate("/companies");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>DeleteCompany</h2>
        <p>Are you sure you want to delete this company?</p>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeleteCompany;
