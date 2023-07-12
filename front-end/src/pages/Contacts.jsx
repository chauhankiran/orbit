import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    navigate("/contacts/add");
  };

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data.data));
  }, []);

  return (
    <>
      <h1>Contacts</h1>
      <button onClick={handleAddContact}>Add contact</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Title</th>
            <th>Created by</th>
            <th>Created on</th>
            <th>Updated by</th>
            <th>Updated on</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <Link to={`/contacts/${contact.id}`}>{contact.id}</Link>
                  </td>
                  <td>
                    <Link to={`/contacts/${contact.id}`}>{contact.firstName}</Link>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>1</td>
            <td>Will Smith</td>
            <td>+91 987 987 7777</td>
            <td>support@google.com</td>
            <td>Manager</td>
            <td>Jane Doe</td>
            <td>2 days ago</td>
            <td>Marry Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>+91 987 987 8888</td>
            <td>support@ibm.com</td>
            <td>HR Manager</td>
            <td>Rita Flower</td>
            <td>3 days ago</td>
            <td>Jack Doe</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mike Doe</td>
            <td>+91 987 987 9999</td>
            <td>press@adobe.com</td>
            <td>CEO</td>
            <td>Mike Doe</td>
            <td>6 days ago</td>
            <td>Robin Doe</td>
            <td>4 days ago</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Alice Doe</td>
            <td>+91 987 121 1212</td>
            <td>contact@apple.com</td>
            <td>Supervisor</td>
            <td>John Doe</td>
            <td>4 days ago</td>
            <td>Will Doe</td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Merry Doe</td>
            <td>+91 987 000 1111</td>
            <td>hi@microsoft.com</td>
            <td>COO</td>
            <td>Will Doe</td>
            <td>1 day ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Bob Doe</td>
            <td>+91 999 888 7777</td>
            <td>media@amazon.com</td>
            <td>VP</td>
            <td>Michel Doe</td>
            <td>6 hours ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Charlie Doe</td>
            <td>+91 999 111 2121</td>
            <td>press@oracle.com</td>
            <td>Manager</td>
            <td>Alice Doe</td>
            <td>3 days ago</td>
            <td>Jane Doe</td>
            <td>Few mins ago</td>
          </tr>
          <tr>
            <td>8</td>
            <td>David Doe</td>
            <td>+91 988 887 7788</td>
            <td>contact@canonical.com</td>
            <td>Advocate</td>
            <td>Rita Doe</td>
            <td>2 days ago</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Frank Doe</td>
            <td>+91 999 999 9988</td>
            <td>press@stripe.com</td>
            <td>CTO</td>
            <td>Jane Doe</td>
            <td>8 days ago</td>
            <td>Rita Flower</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Gal Doe</td>
            <td>+91 999 666 1111</td>
            <td>contact@nova.com</td>
            <td>CFO</td>
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

export default Contacts;
