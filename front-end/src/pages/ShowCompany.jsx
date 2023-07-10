import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteCompany from "./DeleteCompany";

const ShowCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  const [showDeleteCompanyModal, setShowDeleteCompanyModal] = useState(false);

  const handleDeleteCompany = () => {
    setShowDeleteCompanyModal(!showDeleteCompanyModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/companies/${id}`)
      .then((res) => res.json())
      .then((data) => setCompany(data.data));
  }, [id]);

  return (
    <>
      <h1>{company.name}</h1>

      <button onClick={handleDeleteCompany}>Delete</button>

      <DeleteCompany showDeleteCompanyModal={showDeleteCompanyModal} id={id} onClose={handleDeleteCompany} />
    </>
  );
};

export default ShowCompany;
