import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/companies/${id}`)
      .then((res) => res.json())
      .then((data) => setCompany(data.data));
  }, [id]);

  return <h1>{company.name}</h1>;
};

export default ShowCompany;
