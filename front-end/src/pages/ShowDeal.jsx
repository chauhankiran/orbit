import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteDeal from "./DeleteDeal";

const ShowDeal = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState({});
  const [showDeleteDealModal, setShowDeleteDealModal] = useState(false);

  const handleDeleteDeal = () => {
    setShowDeleteDealModal(!showDeleteDealModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/deals/${id}`)
      .then((res) => res.json())
      .then((data) => setDeal(data.data));
  }, [id]);

  return (
    <>
      <h1>{deal.name}</h1>

      <button onClick={handleDeleteDeal}>Delete</button>

      <DeleteDeal showDeleteDealModal={showDeleteDealModal} id={id} onClose={handleDeleteDeal} />
    </>
  );
};

export default ShowDeal;
