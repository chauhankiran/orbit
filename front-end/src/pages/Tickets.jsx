import { useEffect, useState } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data.data));
  }, []);

  return (
    <>
      <h1>Tickets</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Updated by</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 &&
            tickets.map((ticket) => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.name}</td>
                </tr>
              );
            })}
          <tr>
            <td>1</td>
            <td>Problem with close connection</td>
            <td>Low</td>
            <td>Will J.</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Internet issue</td>
            <td>Low</td>
            <td>Bina T.</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Intrrupt on ground floor</td>
            <td>Super urgent</td>
            <td>Robin K.</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Replace window glass</td>
            <td>Normal</td>
            <td>Jack D.</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>SOT installation issue</td>
            <td>High</td>
            <td>Martin F.</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Problem with screens</td>
            <td>Urgent</td>
            <td>Joel B.</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Timeout after few days</td>
            <td>Low</td>
            <td>Dan A.</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Connection terminated</td>
            <td>-</td>
            <td>Marry T.</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Site is closed temp.</td>
            <td>Normal</td>
            <td>Vina S.</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Installation issue</td>
            <td>Normal</td>
            <td>Jeda W.</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tickets;
