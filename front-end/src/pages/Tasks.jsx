import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    navigate("/tasks/add");
  };

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.data));
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      <button onClick={handleAddTask}>Add task</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>On</th>
            <th>Created by</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>
                    <Link to={`/tasks/${task.id}`}>{task.id}</Link>
                  </td>
                  <td>
                    <Link to={`/tasks/${task.id}`}>{task.name}</Link>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>1</td>
            <td>Product Demo</td>
            <td>Jan 12, 2023 10:00AM</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Contract Renewal</td>
            <td>Feb 13, 2023 04:00AM</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Webinar</td>
            <td>Mar 22, 2023 01:15PM</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Training Session</td>
            <td>Apr 16, 2023 07:00PM</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Welcome Newmate</td>
            <td>May 01, 2023 04:00PM</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Discount</td>
            <td>Jun 29, 2023 11:30AM</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Exit Interview</td>
            <td>Jul 22, 2023 02:00PM</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Quarter Planning</td>
            <td>Aug 06, 2023 01:30PM</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Feedback</td>
            <td>Sep 11, 2023 06:00PM</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Clerification on Quote</td>
            <td>Oct 25, 2023 05:30PM</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
