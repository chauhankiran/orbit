import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({});

  const handleCreateTask = (e) => {
    e.preventDefault();

    const taskObj = {
      name: task.name,
    };

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObj),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/tasks/${data.data}`);
      });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Add task</h1>
      <form method="post" onSubmit={handleCreateTask}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Webinar on new release features"
            onChange={handleChange}
            value={task.name || ""}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default AddTask;
