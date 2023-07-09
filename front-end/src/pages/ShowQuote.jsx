import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowQuote = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/quotes/${id}`)
      .then((res) => res.json())
      .then((data) => setQuote(data.data));
  }, [id]);

  return <h1>{quote.name}</h1>;
};

export default ShowQuote;
