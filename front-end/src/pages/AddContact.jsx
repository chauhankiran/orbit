import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  const handleCreateContact = (e) => {
    e.preventDefault();

    const contactObj = {
      firstName: contact.firstName,
    };

    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/contacts/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add contact</h1>
      <form method="post" onSubmit={handleCreateContact}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Kai"
            onChange={handleChange}
            value={contact.firstName || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddContact;
