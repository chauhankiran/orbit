import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteTask from "./DeleteTask";

const ShowTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

  const handleDeleteTask = () => {
    setShowDeleteTaskModal(!showDeleteTaskModal);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data.data));
  }, [id]);

  return (
    <>
      <h1>{task.name}</h1>
      <button onClick={handleDeleteTask}>Delete</button>
      <DeleteTask showDeleteTaskModal={showDeleteTaskModal} id={id} onClose={handleDeleteTask} />
    </>
  );
};

export default ShowTask;
