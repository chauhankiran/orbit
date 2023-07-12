import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Companies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const handleAddCompany = () => {
    navigate("/companies/add");
  };

  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data.data));
  }, []);

  return (
    <>
      <h1>Companies</h1>
      <button onClick={handleAddCompany}>Add company</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Website</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Updated by</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 &&
            companies.map((company) => {
              return (
                <tr key={company.id}>
                  <td>
                    <Link to={`/companies/${company.id}`}>{company.id}</Link>
                  </td>
                  <td>
                    <Link to={`/companies/${company.id}`}>{company.name}</Link>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>1</td>
            <td>Google, Inc.</td>
            <td>support@google.com</td>
            <td>+91 987 987 7777</td>
            <td>https://google.com</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>IBM, Inc.</td>
            <td>support@ibm.com</td>
            <td>+91 987 987 8888</td>
            <td>https://ibm.com</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Adobe Systems</td>
            <td>press@adobe.com</td>
            <td>+91 987 987 9999</td>
            <td>https://adobe.com</td>
            <td>Mike Doe</td>
            <td>6 days ago</td>
            <td>Robin Doe</td>
            <td>4 days ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Apple, Inc.</td>
            <td>contact@apple.com</td>
            <td>+91 987 121 1212</td>
            <td>https://apple.com</td>
            <td>John Doe</td>
            <td>4 days ago</td>
            <td>Will Doe</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Microsoft, Inc.</td>
            <td>hi@microsoft.com</td>
            <td>+91 987 000 1111</td>
            <td>https://microsoft.com</td>
            <td>Will Doe</td>
            <td>1 day ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Amazon, Inc.</td>
            <td>media@amazon.com</td>
            <td>+91 999 888 7777</td>
            <td>https://amazon.com</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Oracle, Inc.</td>
            <td>press@oracle.com</td>
            <td>+91 999 111 2121</td>
            <td>https://oracle.com</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Canonical Ltd.</td>
            <td>contact@canonical.com</td>
            <td>+91 988 887 7788</td>
            <td>https://canonical.com</td>
            <td>Rita Doe</td>
            <td>2 days ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Stripe, Inc.</td>
            <td>press@stripe.com</td>
            <td>+91 999 999 9988</td>
            <td>https://stripe.com</td>
            <td>Jane Doe</td>
            <td>8 days ago</td>
            <td>Rita Flower</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Nova Ltd.</td>
            <td>contact@nova.com</td>
            <td>+91 999 666 1111</td>
            <td>https://nova.com</td>
            <td>Alice Doe</td>
            <td>7 days ago</td>
            <td>Alice Doe</td>
            <td>7 days ago</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Companies;
