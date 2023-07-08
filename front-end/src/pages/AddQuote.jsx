import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddQuote = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState({});

  const handleCreateQuote = (e) => {
    e.preventDefault();

    const quoteObj = {
      name: quote.name,
    };

    fetch("http://localhost:5000/quotes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quoteObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/quotes/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add quote</h1>
      <form method="post" onSubmit={handleCreateQuote}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Quote for buildings windows"
            onChange={handleChange}
            value={quote.name || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddQuote;
