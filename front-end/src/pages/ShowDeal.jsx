import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDeal = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/deals/${id}`)
      .then((res) => res.json())
      .then((data) => setDeal(data.data));
  }, [id]);

  return <h1>{deal.name}</h1>;
};

export default ShowDeal;
