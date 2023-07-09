import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data.data));
  }, [id]);

  return <h1>{contact.firstName}</h1>;
};

export default ShowContact;
