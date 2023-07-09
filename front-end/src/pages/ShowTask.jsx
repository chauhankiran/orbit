import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data.data));
  }, [id]);

  return <h1>{task.name}</h1>;
};

export default ShowTask;
