import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteQuote from "./DeleteQuote";

const ShowQuote = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState({});
  const [showDeleteQuoteModal, setShowDeleteQuoteModal] = useState(false);

  const handleDeleteQuote = () => {
    setShowDeleteQuoteModal(!showDeleteQuoteModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/quotes/${id}`)
      .then((res) => res.json())
      .then((data) => setQuote(data.data));
  }, [id]);

  return (
    <>
      <h1>{quote.name}</h1>
      <button onClick={handleDeleteQuote}>Delete</button>
      <DeleteQuote showDeleteQuoteModal={showDeleteQuoteModal} id={id} onClose={handleDeleteQuote} />
    </>
  );
};

export default ShowQuote;
