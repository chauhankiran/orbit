import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Deals = () => {
  const navigate = useNavigate();
  const [deals, setDeals] = useState([]);

  const handleAddDeal = () => {
    navigate("/deals/add");
  };

  useEffect(() => {
    fetch("http://localhost:5000/deals")
      .then((res) => res.json())
      .then((data) => setDeals(data.data));
  }, []);

  return (
    <>
      <h1>Deals</h1>
      <button onClick={handleAddDeal}>Add deal</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Updated by</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {deals.length > 0 &&
            deals.map((deal) => {
              return (
                <tr key={deal.id}>
                  <td>{deal.id}</td>
                  <td>{deal.name}</td>
                </tr>
              );
            })}
          <tr>
            <td>1</td>
            <td>Door replace</td>
            <td>$12,000</td>
            <td>Closed</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mailbox server</td>
            <td>$70,000</td>
            <td>Under reviewed</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Office renovation</td>
            <td>$1,20,000</td>
            <td>Closed</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Glass window for left wall</td>
            <td>$5,400</td>
            <td>Won</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>SOT installation</td>
            <td>$10,000</td>
            <td>Won</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ads on vihicle</td>
            <td>$30,000</td>
            <td>Lost</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Uniform for 700+</td>
            <td>$33,000</td>
            <td>Added</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Desktops replacement</td>
            <td>$1,30,000</td>
            <td>Waiting for customer</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Fiber connection</td>
            <td>$90,000</td>
            <td>Lost</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>LAN installation</td>
            <td>$2,000</td>
            <td>Won</td>
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

export default Deals;
