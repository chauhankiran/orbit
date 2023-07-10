import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteContact from "./DeleteContact";

const ShowContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [showDeleteContactModal, setShowDeleteContactModal] = useState(false);

  const handleDeleteContact = () => {
    setShowDeleteContactModal(!showDeleteContactModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data.data));
  }, [id]);

  return (
    <>
      <h1>{contact.firstName}</h1>

      <button onClick={handleDeleteContact}>Delete</button>

      <DeleteContact showDeleteContactModal={showDeleteContactModal} id={id} onClose={handleDeleteContact} />
    </>
  );
};

export default ShowContact;
