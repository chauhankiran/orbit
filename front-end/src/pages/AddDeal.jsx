import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDeal = () => {
  const navigate = useNavigate();
  const [deal, setDeal] = useState({});

  const handleCreateDeal = (e) => {
    e.preventDefault();

    const dealObj = {
      name: deal.name,
    };

    fetch("http://localhost:5000/deals", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dealObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/deals/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setDeal({ ...deal, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add deal</h1>
      <form method="post" onSubmit={handleCreateDeal}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Paint whole building"
            onChange={handleChange}
            value={deal.name || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddDeal;
