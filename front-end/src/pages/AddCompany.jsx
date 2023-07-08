import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCompany = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({});

  const handleCreateCompany = (e) => {
    e.preventDefault();

    const companyObj = {
      name: company.name,
    };

    fetch("http://localhost:5000/companies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/companies/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add company</h1>
      <form method="post" onSubmit={handleCreateCompany}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Company, Inc."
            onChange={handleChange}
            value={company.name || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddCompany;
